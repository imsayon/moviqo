# Moviqo

Moviqo is now a small feature-based monorepo with:

- `apps/web`: React + Vite frontend
- `apps/api`: Express backend
- `packages/shared`: shared cinema domain data and helpers

## Getting started

```bash
pnpm install
pnpm dev
```

Frontend runs on `http://localhost:5173` and proxies API requests to `http://localhost:5000`.

## Production build

```bash
pnpm build
pnpm start
```

When the frontend is built, the API serves `apps/web/dist` in production.
