# Moviqo - Movie Booking Platform

A production-grade movie booking application built with **Firebase** for authentication, **Firestore** for the database, and **Firebase Hosting** for deployment.

## 🎯 Features

### Authentication
- ✅ Google OAuth 2.0 sign-in
- ✅ Automatic session persistence
- ✅ Secure token management
- ✅ User profile management

### Database
- ✅ Firestore real-time database
- ✅ Secure data isolation per user
- ✅ Automatic timestamps
- ✅ Offline support (IndexedDB persistence)

### Booking System
- ✅ Create movie bookings
- ✅ View booking history
- ✅ Cancel bookings
- ✅ Seat selection
- ✅ Price calculation

### Security
- ✅ Firestore security rules
- ✅ JWT token verification
- ✅ CORS protection
- ✅ Environment variable management
- ✅ No sensitive data in Git

### Hosting
- ✅ Firebase Hosting (CDN)
- ✅ Automatic HTTPS
- ✅ SPA routing
- ✅ Cache optimization
- ✅ Global distribution

---

## 🚀 Quick Start

### 1. Clone & Install

```bash
cd /path/to/moviqo
pnpm install
```

### 2. Setup Firebase

```bash
# Login to Firebase
firebase login

# Initialize Firebase project
firebase init
```

Choose:
- Firestore Database
- Authentication (Google)
- Hosting

### 3. Configure Environment

```bash
# Copy example env file
cp .env.example .env

# Edit .env with your Firebase credentials
# See DEPLOYMENT.md for detailed setup
```

### 4. Start Development

```bash
# Terminal 1: Start client
cd client && pnpm dev

# Terminal 2: Start server
cd server && pnpm dev
```

Access at: http://localhost:5173

---

## 📁 Project Structure

```
moviqo/
├── client/                        # Frontend (Vite + Vue/React)
│   ├── src/
│   │   ├── lib/
│   │   │   ├── firebase.js       # Firebase config
│   │   │   └── auth-service.js   # API client with auth
│   │   └── app/                  # Components
│   └── vite.config.js
├── server/                        # Backend (Express)
│   ├── src/
│   │   ├── app/
│   │   │   ├── firebase.js       # Firebase Admin SDK
│   │   │   ├── createServer.js   # Express app
│   │   │   └── env.js            # Config
│   │   ├── modules/
│   │   │   ├── auth/             # Auth routes
│   │   │   ├── bookings/         # Booking routes
│   │   │   └── movies/           # Movie routes
│   │   ├── services/             # Business logic
│   │   │   ├── user-profile.service.js
│   │   │   └── booking.service.js
│   │   ├── middleware/           # Express middleware
│   │   │   └── auth.middleware.js
│   │   └── index.js
│   └── package.json
├── .env.example                   # Environment template
├── firebase.json                  # Firebase config
├── firestore.rules                # Security rules
├── firestore.indexes.json         # Database indexes
├── DEPLOYMENT.md                  # Deployment guide
└── README.md                      # This file
```

---

## 🔐 Environment Variables

### Client Variables (Public)

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### Server Variables (Private - Never commit!)

```env
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_PRIVATE_KEY_ID=key_id
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----..."
FIREBASE_CLIENT_EMAIL=firebase-adminsdk@...
FIREBASE_CLIENT_ID=client_id

NODE_ENV=development
PORT=5000
VITE_API_URL=http://localhost:5000/api
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:5000
```

> ⚠️ **CRITICAL**: Never commit `.env` file. It's in `.gitignore` for security.

---

## 📚 API Documentation

### Authentication Endpoints

#### `POST /api/auth/profile`
Create or get user profile after OAuth login.

**Request**:
```javascript
await authService.createOrUpdateProfile({
  displayName: "John Doe",
  photoURL: "https://..."
});
```

**Response**:
```json
{
  "success": true,
  "data": {
    "uid": "user123",
    "email": "john@example.com",
    "displayName": "John Doe",
    "photoURL": "https://...",
    "createdAt": "2026-05-17T10:30:00Z",
    "bookings": [],
    "preferences": { "theme": "light" }
  }
}
```

#### `GET /api/auth/profile`
Get current user profile.

**Response**: Same as above

#### `PUT /api/auth/profile`
Update user profile.

**Request**:
```javascript
await authService.updateProfile({
  displayName: "Jane Doe",
  preferences: { theme: "dark", notifications: true }
});
```

### Booking Endpoints

#### `POST /api/auth/bookings`
Create a new booking.

**Request**:
```javascript
await authService.createBooking({
  movieId: "movie123",
  movieTitle: "Quantum Horizon",
  selectedSeats: ["A1", "A2"],
  quantity: 2,
  totalPrice: 500,
  showtime: "2026-05-20T19:00:00Z"
});
```

**Response**:
```json
{
  "success": true,
  "data": {
    "id": "booking123",
    "uid": "user123",
    "movieId": "movie123",
    "selectedSeats": ["A1", "A2"],
    "quantity": 2,
    "totalPrice": 500,
    "status": "confirmed",
    "bookingDate": "2026-05-17T10:30:00Z"
  }
}
```

#### `GET /api/auth/bookings`
Get all user bookings.

**Response**:
```json
{
  "success": true,
  "data": [
    { "id": "booking1", ... },
    { "id": "booking2", ... }
  ]
}
```

#### `GET /api/auth/bookings/:bookingId`
Get specific booking details.

#### `DELETE /api/auth/bookings/:bookingId`
Cancel a booking.

---

## 🛠️ Development Commands

### Client

```bash
cd client

# Development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Lint code
pnpm lint
```

### Server

```bash
cd server

# Development with auto-reload
pnpm dev

# Production mode
pnpm start

# Both (from root)
pnpm dev     # Runs server in dev
pnpm build   # Builds client
pnpm start   # Runs built client + server
```

---

## 🚢 Deployment

### Prerequisites

1. Firebase CLI installed: `npm install -g firebase-tools`
2. Logged in: `firebase login`
3. `.env` file configured with production values

### Deploy Steps

```bash
# 1. Build client
pnpm build

# 2. Deploy to Firebase (everything)
firebase deploy

# Or deploy specific services:
firebase deploy --only firestore:rules,hosting
```

### Production Checklist

- [ ] `.env` file configured with production credentials
- [ ] Firestore security rules reviewed and deployed
- [ ] Google OAuth redirect URIs configured in Firebase
- [ ] Environment variables set in Firebase Console
- [ ] CORS origins updated for production domain
- [ ] Database backups enabled
- [ ] Monitoring and alerts configured
- [ ] SSL/TLS verified (automatic with Firebase Hosting)
- [ ] Rate limiting considered
- [ ] Error logging configured

---

## 🔒 Security

### Firestore Rules

All data access is controlled by rules in `firestore.rules`:

```firestore
// Users can only read/write their own data
match /users/{uid} {
  allow read, write: if request.auth.uid == uid;
}

// Bookings are private to each user
match /bookings/{bookingId} {
  allow read, write: if resource.data.uid == request.auth.uid;
}
```

### Token Security

- JWT tokens verified on every API request
- Tokens automatically refresh when expired
- Secure storage in browser (Firebase handles)
- HttpOnly cookies recommended for production

### Password Security

- No passwords stored (OAuth 2.0)
- Google handles authentication
- No plaintext credentials in code
- All secrets in environment variables

---

## 🐛 Troubleshooting

### OAuth Not Working

**Check**:
1. Google OAuth enabled in Firebase Console
2. Authorized redirect URIs match your domain
3. CORS origins configured in `createServer.js`
4. Browser console for specific errors

**Fix**:
```javascript
// In client/src/lib/firebase.js
googleProvider.addScope("profile");
googleProvider.addScope("email");
```

### Firestore Permission Denied

**Check**:
1. Security rules deployed: `firebase deploy --only firestore:rules`
2. User is authenticated
3. `uid` in data matches authenticated user

**Test**:
```bash
firebase emulators:start
# Test with local emulator first
```

### Build Fails

```bash
# Clear everything and rebuild
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm build
```

### Port Already in Use

```bash
# Change port in server/src/app/env.js
export const env = {
  port: 5001,  // Change this
  ...
};
```

---

## 📖 Documentation

- **Firebase Docs**: https://firebase.google.com/docs
- **Firestore Guide**: https://firebase.google.com/docs/firestore
- **Authentication**: https://firebase.google.com/docs/auth/web/google-signin
- **Hosting**: https://firebase.google.com/docs/hosting
- **Full Deployment Guide**: See [DEPLOYMENT.md](./DEPLOYMENT.md)

---

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/name`
2. Make changes and test locally
3. Commit: `git commit -m "Add feature"`
4. Push: `git push origin feature/name`
5. Create Pull Request

### Code Style

- Use consistent indentation (2 spaces)
- Add comments for complex logic
- Follow existing patterns
- Test before pushing

---

## 📝 License

MIT License - See [LICENSE](./LICENSE) file

---

## 📞 Support

- **Firebase Support**: https://support.google.com/firebase
- **Community Forum**: https://stackoverflow.com/questions/tagged/firebase
- **GitHub Issues**: Report bugs here
- **Email**: sayn731@gmail.com

---

**Last Updated**: May 2026  
**Version**: 1.0.0  
**Status**: Production Ready ✅
