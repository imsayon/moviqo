import { verifyIdToken } from "../app/firebase.js";

/**
 * Verify Firebase ID Token
 * Middleware to verify Firebase authentication tokens from client
 */
export async function verifyAuth(request, response, next) {
  try {
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return response.status(401).json({
        error: {
          message: "Missing or invalid authorization header",
          code: "MISSING_AUTH",
        },
      });
    }

    const token = authHeader.substring(7);
    const decodedToken = await verifyIdToken(token);

    // Attach user info to request
    request.user = {
      uid: decodedToken.uid,
      email: decodedToken.email,
      displayName: decodedToken.name,
      photoURL: decodedToken.picture,
    };

    next();
  } catch (error) {
    return response.status(401).json({
      error: {
        message: "Authentication failed",
        details: error.message,
        code: "AUTH_FAILED",
      },
    });
  }
}

/**
 * Optional Auth Middleware
 * Doesn't fail if auth is missing, just populates user if present
 */
export async function optionalAuth(request, response, next) {
  try {
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return next();
    }

    const token = authHeader.substring(7);
    const decodedToken = await verifyIdToken(token);

    request.user = {
      uid: decodedToken.uid,
      email: decodedToken.email,
      displayName: decodedToken.name,
      photoURL: decodedToken.picture,
    };
  } catch (error) {
    // Silently ignore auth errors in optional auth
  }

  next();
}

export default { verifyAuth, optionalAuth };
