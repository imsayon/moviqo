import path from "node:path";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";

dotenv.config();

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(currentDir, "../../../");

// Validate Firebase environment variables
const requiredFirebaseVars = [
  "FIREBASE_PROJECT_ID",
  "FIREBASE_PRIVATE_KEY_ID",
  "FIREBASE_PRIVATE_KEY",
  "FIREBASE_CLIENT_EMAIL",
];

const missingVars = requiredFirebaseVars.filter((key) => !process.env[key]);
if (missingVars.length > 0 && process.env.NODE_ENV === "production") {
  throw new Error(`Missing Firebase environment variables: ${missingVars.join(", ")}`);
}

export const env = {
  nodeEnv: process.env.NODE_ENV || "development",
  port: Number(process.env.PORT || 5000),
  repoRoot,
  clientRootPath: path.join(repoRoot, "client"),
  webDistPath: path.join(repoRoot, "client/dist"),
  allowedOrigins: (process.env.ALLOWED_ORIGINS || "http://localhost:5173").split(","),
  
  // Firebase configuration
  firebase: {
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKeyId: process.env.FIREBASE_PRIVATE_KEY_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    clientId: process.env.FIREBASE_CLIENT_ID,
    authUri: process.env.FIREBASE_AUTH_URI,
    tokenUri: process.env.FIREBASE_TOKEN_URI,
  },
};

// Warn in development if Firebase is not configured
if (env.nodeEnv === "development" && missingVars.length > 0) {
  console.warn("Firebase Admin SDK is not configured. Some features may not work.");
  console.warn("Missing variables:", missingVars.join(", "));
}
