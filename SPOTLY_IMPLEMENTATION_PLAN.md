# Spotly — Implementation Plan

## 1. Project overview

Spotly is a real-time queue management system. Three deployable units share one monorepo:

| Unit | Port | Stack | Purpose |
|------|------|-------|---------|
| `apps/api` | 3001 | NestJS + Firestore + Socket.IO | REST + WebSocket backend |
| `apps/consumer` | 3000 | Next.js 14 | Public-facing: browse merchants, join queues |
| `apps/merchant` | 3002 | Next.js 14 | Merchant portal: manage queues, call tokens |
| `packages/types` | — | TypeScript | Shared domain interfaces |

Auth is shared: Firebase Auth (Google OAuth / Phone OTP) issues ID tokens; the NestJS guard verifies them on every protected route.

---

## 2. Current state — what works

- **Firebase Admin SDK** initialised in `FirebaseService` with fallback to env vars.
- **Auth guard** (`FirebaseAuthGuard`) verifies Bearer tokens and attaches `user` to the request.
- **Merchant CRUD**: register, find by ID, find by owner UID, list all.
- **Outlet CRUD**: create, find by merchant.
- **Queue operations**: join, advance (call next), mark served, leave, get entry, get full queue.
- **WebSocket gateway** (`QueueGateway`): room-based pub/sub via `join_outlet` / `leave_outlet`; emits `queue_update` and `token_called`.
- **Consumer UI**: home (merchant grid), merchant detail + outlet list, queue tracker with live position.
- **Merchant UI**: dashboard (stats), queue page (call next, mark served), outlets page (create merchant / outlet).
- **Render deployment config** (`render.yaml`) with env vars baked in.

---

## 3. Known bugs — fix these first

### Bug 1 — Route conflict: `GET /api/merchant/me/profile`

**File**: `apps/api/src/modules/merchant/merchant.controller.ts`

NestJS registers routes in declaration order. `GET /merchant/:id` is declared before `GET /merchant/me/profile`, so "me" is treated as an ID — the profile route is unreachable.

**Fix**: Move `@Get('me/profile')` above `@Get(':id')`.

```typescript
// merchant.controller.ts — correct order
@Get()
async findAll() { ... }

@Get('me/profile')           // ← must come BEFORE :id
@UseGuards(FirebaseAuthGuard)
async getMyMerchant(@CurrentUser() user: DecodedUser) { ... }

@Get(':id')                  // ← catch-all last
async findOne(@Param('id') id: string) { ... }

@Post()
@UseGuards(FirebaseAuthGuard)
async create(...) { ... }
```

---

### Bug 2 — Token number race condition

**File**: `apps/api/src/modules/queue/queue.service.ts`

```typescript
const waiting = await this.repo.countWaiting(outletId);
const tokenNumber = waiting + 1;  // ← not atomic — concurrent joins get same number
```

**Short-term fix** (no Redis): Use a Firestore transaction to read-increment a counter doc.

```typescript
// Add to FirestoreQueueRepository
async getNextToken(outletId: string): Promise<number> {
  const counterRef = this.db.doc(`outlet_counters/${outletId}`);
  return this.db.runTransaction(async (tx) => {
    const snap = await tx.get(counterRef);
    const next = (snap.exists ? (snap.data()!.counter as number) : 0) + 1;
    tx.set(counterRef, { counter: next }, { merge: true });
    return next;
  });
}
```

Replace in `QueueService.joinQueue`:
```typescript
const tokenNumber = await this.repo.getNextToken(outletId);
```

**Long-term fix**: Use Redis `INCR` (BullMQ is already a dependency candidate per the architecture diagram).

---

### Bug 3 — Firebase CLI auth (development only)

The `firebase-debug.log` shows a 401 from expired OAuth tokens. This only affects CLI commands (`firebase projects:list`, `firebase deploy`).

**Fix**:
```bash
firebase logout
firebase login
```

This does not affect the running app — `firebase-admin` uses a service account, not CLI credentials.

---

### Bug 4 — Outlet queue route conflict

**File**: `apps/api/src/modules/outlet/outlet.controller.ts`

`GET /outlet/merchant/:merchantId` can conflict with `GET /outlet/:id` if NestJS resolves "merchant" as an ID.

**Fix**: same pattern as Bug 1 — declare the more specific route first:

```typescript
@Get('merchant/:merchantId')
async findByMerchant(...) { ... }

@Get(':id')
async findOne(...) { ... }
```

---

## 4. Missing features — implement in order

### 4a. Firestore composite indexes

Firestore requires explicit indexes for queries with `where` + `orderBy` on different fields.

Create `firestore.indexes.json` at the project root:

```json
{
  "indexes": [
    {
      "collectionGroup": "queue_entries",
      "queryScope": "COLLECTION",
      "fields": [
        { "fieldPath": "outletId", "order": "ASCENDING" },
        { "fieldPath": "status",   "order": "ASCENDING" },
        { "fieldPath": "tokenNumber", "order": "ASCENDING" }
      ]
    },
    {
      "collectionGroup": "queue_entries",
      "queryScope": "COLLECTION",
      "fields": [
        { "fieldPath": "outletId", "order": "ASCENDING" },
        { "fieldPath": "status",   "order": "ASCENDING" }
      ]
    }
  ],
  "fieldOverrides": []
}
```

Deploy with:
```bash
firebase deploy --only firestore:indexes
```

---

### 4b. Missed-token timer (merchant side)

Architecture calls for a "missed timer" in the queue API module. When the merchant calls next (`POST /queue/next`), start a countdown. If the merchant doesn't call `POST /queue/served/:entryId` within N seconds, automatically mark the entry as MISSED and advance.

**Implementation sketch** (using NestJS `@nestjs/schedule` or a simple `setTimeout`):

```typescript
// In QueueService
private readonly MISSED_TIMEOUT_MS = 60_000; // 60s
private missedTimers = new Map<string, NodeJS.Timeout>();

async advanceQueue(outletId: string): Promise<QueueEntry | null> {
  // cancel any existing timer for this outlet
  const existing = this.missedTimers.get(outletId);
  if (existing) clearTimeout(existing);

  const called = await this.repo.advanceQueue(outletId);
  if (called) {
    const timer = setTimeout(async () => {
      await this.repo.markMissed(called.id);
      await this.emitQueueUpdate(outletId);
      this.missedTimers.delete(outletId);
    }, this.MISSED_TIMEOUT_MS);
    this.missedTimers.set(outletId, timer);

    // emit events...
  }
  return called;
}

async markServed(entryId: string, outletId: string): Promise<void> {
  const timer = this.missedTimers.get(outletId);
  if (timer) { clearTimeout(timer); this.missedTimers.delete(outletId); }
  await this.repo.markServed(entryId);
  await this.emitQueueUpdate(outletId);
}
```

> **Note**: In-memory timers are lost on server restart. For production reliability, use BullMQ with delayed jobs (Redis-backed). The architecture diagram already shows BullMQ in infra.

---

### 4c. Merchant onboarding page

**File to create**: `apps/merchant/src/app/onboarding/page.tsx`

The architecture shows `/onboarding` for new merchant setup. This is a multi-step form:

1. Step 1 — Create merchant profile (name, category)
2. Step 2 — Create first outlet (name, address)
3. Step 3 — Done screen with deep link to consumer app

Redirect here from the dashboard if `merchant === null`.

```typescript
// In dashboard/page.tsx, add after merchant load:
if (!merchant && !fetching) {
  router.push('/onboarding');
}
```

---

### 4d. Token OTP display (consumer side)

The `QueueEntry` has `tokenNumber`. The merchant calls `POST /queue/next` which emits `token_called` via WebSocket. The consumer already listens for this event. What's missing is a visual notification.

**Add to** `apps/consumer/src/app/queue/[entryId]/page.tsx`:

```typescript
// In handleTokenCalled, trigger browser notification if permitted
const onTokenCalled = (payload: TokenCalledPayload) => {
  handleTokenCalled(payload.tokenNumber);
  if (payload.userId === user?.uid && 'Notification' in window) {
    Notification.requestPermission().then((perm) => {
      if (perm === 'granted') {
        new Notification('Your turn!', {
          body: `Token #${payload.tokenNumber} — please proceed to the counter.`,
        });
      }
    });
  }
};
```

---

### 4e. Error boundaries (both frontends)

Neither app has error boundaries. Add a global one in each layout:

**File**: `apps/consumer/src/components/ErrorBoundary.tsx`

```tsx
'use client';
import { Component, ReactNode } from 'react';

export class ErrorBoundary extends Component<
  { children: ReactNode },
  { error: Error | null }
> {
  state = { error: null };
  static getDerivedStateFromError(error: Error) { return { error }; }
  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen flex items-center justify-center text-center px-4">
          <div>
            <p className="text-4xl mb-4">⚠️</p>
            <p className="text-white font-semibold mb-2">Something went wrong</p>
            <p className="text-gray-500 text-sm">{(this.state.error as Error).message}</p>
            <a href="/" className="btn-primary mt-6 inline-block">Go home</a>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
```

Wrap in `layout.tsx`:
```tsx
<AuthProvider><ErrorBoundary>{children}</ErrorBoundary></AuthProvider>
```

---

### 4f. Docker Compose for local infra

**File**: `infra/docker-compose.yml` (currently empty)

```yaml
version: '3.9'
services:
  redis:
    image: redis:7-alpine
    ports: ['6379:6379']
    volumes: ['redis_data:/data']

volumes:
  redis_data:
```

Start with:
```bash
docker compose -f infra/docker-compose.yml up -d
```

---

### 4g. Nginx reverse proxy (optional, for local all-in-one)

**File**: `infra/nginx.conf` (currently empty)

```nginx
upstream api      { server localhost:3001; }
upstream consumer { server localhost:3000; }
upstream merchant { server localhost:3002; }

server {
  listen 80;
  server_name localhost;

  location /api/     { proxy_pass http://api; }
  location /socket.io/ {
    proxy_pass http://api;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
  }
  location /merchant/ { proxy_pass http://merchant; }
  location /          { proxy_pass http://consumer; }
}
```

---

## 5. Getting it running locally — step by step

### Prerequisites
- Node.js 20+
- pnpm 8+
- Docker (for Redis if needed)
- A Firebase project with Firestore and Auth enabled

### Step 1 — Clone and install
```bash
git clone <repo>
cd spotly
pnpm install
```

### Step 2 — Set up env files

Copy and fill in both `.env.example` files:
```bash
cp apps/api/.env.example       apps/api/.env
cp apps/consumer/.env.example  apps/consumer/.env.local
cp apps/merchant/.env.example  apps/merchant/.env.local
```

For `apps/api/.env` — either:
- Put your Firebase service account JSON at `./firebase-service-account.json` and set `FIREBASE_SERVICE_ACCOUNT_PATH=./firebase-service-account.json`
- Or set `FIREBASE_PROJECT_ID`, `FIREBASE_CLIENT_EMAIL`, `FIREBASE_PRIVATE_KEY` directly

### Step 3 — Apply the bug fixes (section 3 above)

Priority order:
1. Fix route ordering in `merchant.controller.ts`
2. Fix route ordering in `outlet.controller.ts`
3. Add `getNextToken` to `FirestoreQueueRepository` and update `QueueService`

### Step 4 — Deploy Firestore indexes
```bash
firebase login
firebase use spotly-d321e
firebase deploy --only firestore:indexes
```

### Step 5 — Run all three services
```bash
pnpm dev
```

Turbo starts all three in parallel. Visit:
- Consumer: http://localhost:3000
- Merchant: http://localhost:3002
- API: http://localhost:3001/api

---

## 6. Deployment on Render

The `render.yaml` is complete. The private key is already inlined (⚠️ rotate this key after confirming it works — store secrets in Render's environment dashboard, not source).

**Deploy steps**:
1. Push to main branch
2. Connect repo to Render
3. Render auto-detects `render.yaml` and creates all three services
4. Set `FIREBASE_PRIVATE_KEY` in Render's secret env (remove it from `render.yaml` after)

**Cold-start warning**: Render free tier suspends services after 15 minutes of inactivity. The first request after suspension takes ~30s. Upgrade to paid or add a health-check ping (e.g. UptimeRobot on `/api/health`).

Add a health endpoint to the API:
```typescript
// In AppModule, or a dedicated HealthController
@Get('health')
health() { return { status: 'ok', ts: new Date().toISOString() }; }
```

---

## 7. Architecture summary for LLMs

When working on this codebase:

### Data flow for joining a queue
```
Consumer UI → POST /api/queue/join (Bearer token)
  → FirebaseAuthGuard verifies token → attaches user
  → QueueService.joinQueue(userId, outletId)
    → FirestoreQueueRepository.getNextToken(outletId)  [transaction]
    → FirestoreQueueRepository.joinQueue(entry)
    → QueueGateway.emitQueueUpdate(outletId, payload)
      → all Socket.IO clients in room "outlet:{outletId}" receive "queue_update"
  → returns QueueEntry { id, tokenNumber, status: "WAITING", ... }
Consumer UI stores entry.id, navigates to /queue/{entry.id}
```

### WebSocket room pattern
- Room name: `outlet:{outletId}`
- Join: client emits `join_outlet { outletId }`
- Events received: `queue_update { outletId, entries, currentToken }` and `token_called { outletId, tokenNumber, userId }`

### Key files for each concern

| Concern | File |
|---------|------|
| Auth verification | `apps/api/src/modules/auth/guards/firebase-auth.guard.ts` |
| Queue business logic | `apps/api/src/modules/queue/queue.service.ts` |
| Firestore operations | `apps/api/src/modules/queue/repositories/firestore-queue.repository.ts` |
| WebSocket events | `apps/api/src/modules/websocket/queue.gateway.ts` |
| Consumer queue UI | `apps/consumer/src/app/queue/[entryId]/page.tsx` |
| Merchant queue UI | `apps/merchant/src/app/queue/page.tsx` |
| Shared types | `packages/types/src/index.ts` |

### Extension points

The `QueueRepository` interface (`queue-repository.interface.ts`) is the DI boundary. Swap Firestore for Prisma/PostgreSQL by implementing the interface and updating the provider in `queue.module.ts`. Nothing else changes.

---

## 8. v2 features (analytics + orders)

Per the architecture diagram, these are explicitly labeled v2 and deferred:

- **Analytics**: peak times, served count per outlet per day — aggregate from `queue_entries` where `status = SERVED`. Firestore aggregation queries or a scheduled job that writes to an `analytics` collection.
- **Orders / preorder**: a new `orders` collection, `POST /order`, and an `/outlet/:id/queue` endpoint that merges walk-in tokens with preorder slots.

Do not build these until the v1 flow (join → call → serve/miss) is stable end-to-end.

---

## 9. Testing checklist (manual, before shipping)

```
[ ] Consumer: sign in with Google → lands on home page
[ ] Consumer: browse merchant list → click a merchant → see outlets
[ ] Consumer: join queue at an outlet → see token number and position
[ ] Merchant: sign in → create merchant profile + outlet
[ ] Merchant: open queue page for that outlet
[ ] Consumer: join queue → merchant sees entry appear in real time (WebSocket)
[ ] Merchant: click "Call Next" → consumer sees status change to CALLED
[ ] Merchant: click "Mark as Served" → consumer sees SERVED state
[ ] Consumer: leave queue → entry disappears from merchant view
[ ] Two consumers join same outlet → token numbers are sequential and unique
[ ] Refresh consumer queue page → state is restored from API (not just store)
```
