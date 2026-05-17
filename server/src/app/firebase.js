import admin from "firebase-admin";
import { env } from "./env.js";

let firebaseApp = null;

/**
 * Initialize Firebase Admin SDK
 * Uses environment variables for credentials in production
 */
export function initializeFirebaseAdmin() {
  if (firebaseApp) {
    return firebaseApp;
  }

  try {
    // Use environment variables to construct credential
    const credential = admin.credential.cert({
      projectId: env.firebase.projectId,
      privateKeyId: env.firebase.privateKeyId,
      privateKey: env.firebase.privateKey,
      clientEmail: env.firebase.clientEmail,
      clientId: env.firebase.clientId,
      authUri: env.firebase.authUri,
      tokenUri: env.firebase.tokenUri,
      type: "service_account",
    });

    firebaseApp = admin.initializeApp({
      credential: credential,
      projectId: env.firebase.projectId,
    });

    console.log("✓ Firebase Admin SDK initialized successfully");
    return firebaseApp;
  } catch (error) {
    console.error("✗ Failed to initialize Firebase Admin SDK:", error.message);
    if (env.nodeEnv === "production") {
      throw error;
    }
    return null;
  }
}

/**
 * Get Firebase Auth instance
 */
export function getAuth() {
  const app = initializeFirebaseAdmin();
  return app ? admin.auth(app) : null;
}

/**
 * Get Firebase Firestore instance
 */
export function getFirestore() {
  const app = initializeFirebaseAdmin();
  return app ? admin.firestore(app) : null;
}

/**
 * Get Firebase Storage instance
 */
export function getStorage() {
  const app = initializeFirebaseAdmin();
  return app ? admin.storage(app) : null;
}

/**
 * Get Firebase Messaging instance
 */
export function getMessaging() {
  const app = initializeFirebaseAdmin();
  return app ? admin.messaging(app) : null;
}

/**
 * Get Firebase Realtime Database instance
 */
export function getDatabase() {
  const app = initializeFirebaseAdmin();
  return app ? admin.database(app) : null;
}

/**
 * Verify ID token and get user data
 */
export async function verifyIdToken(token) {
  try {
    const auth = getAuth();
    if (!auth) {
      throw new Error("Firebase not initialized");
    }
    const decodedToken = await auth.verifyIdToken(token);
    return decodedToken;
  } catch (error) {
    throw new Error(`Token verification failed: ${error.message}`);
  }
}

/**
 * Get user by UID
 */
export async function getUser(uid) {
  try {
    const auth = getAuth();
    if (!auth) {
      throw new Error("Firebase not initialized");
    }
    return await auth.getUser(uid);
  } catch (error) {
    throw new Error(`Failed to get user: ${error.message}`);
  }
}

/**
 * Create a custom token for user
 */
export async function createCustomToken(uid, claims = {}) {
  try {
    const auth = getAuth();
    if (!auth) {
      throw new Error("Firebase not initialized");
    }
    return await auth.createCustomToken(uid, claims);
  } catch (error) {
    throw new Error(`Failed to create custom token: ${error.message}`);
  }
}

/**
 * Get all Firebase services at once
 */
export function getFirebaseServices() {
  initializeFirebaseAdmin();
  
  return {
    auth: getAuth(),
    firestore: getFirestore(),
    storage: getStorage(),
    messaging: getMessaging(),
    database: getDatabase(),
    admin,
  };
}

export { admin };
