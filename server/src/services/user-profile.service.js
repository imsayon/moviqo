import { getFirestore } from "../../app/firebase.js";

/**
 * User Profile Service
 * Manages user profile data in Firestore
 */
export class UserProfileService {
  static async getOrCreateProfile(uid, userData) {
    try {
      const db = getFirestore();
      if (!db) {
        throw new Error("Firestore not initialized");
      }

      const userDocRef = db.collection("users").doc(uid);
      const userDoc = await userDocRef.get();

      if (userDoc.exists()) {
        return { uid, ...userDoc.data() };
      }

      // Create new profile
      const newProfile = {
        uid,
        email: userData.email,
        displayName: userData.displayName || "",
        photoURL: userData.photoURL || "",
        createdAt: new Date(),
        updatedAt: new Date(),
        bookings: [],
        preferences: {
          notificationsEnabled: true,
          theme: "light",
        },
      };

      await userDocRef.set(newProfile);
      return newProfile;
    } catch (error) {
      throw new Error(`Failed to create profile: ${error.message}`);
    }
  }

  static async updateProfile(uid, data) {
    try {
      const db = getFirestore();
      if (!db) {
        throw new Error("Firestore not initialized");
      }

      const updateData = {
        ...data,
        updatedAt: new Date(),
      };

      await db.collection("users").doc(uid).update(updateData);
      
      const userDoc = await db.collection("users").doc(uid).get();
      return { uid, ...userDoc.data() };
    } catch (error) {
      throw new Error(`Failed to update profile: ${error.message}`);
    }
  }

  static async getProfile(uid) {
    try {
      const db = getFirestore();
      if (!db) {
        throw new Error("Firestore not initialized");
      }

      const userDoc = await db.collection("users").doc(uid).get();
      
      if (!userDoc.exists()) {
        return null;
      }
      
      return { uid, ...userDoc.data() };
    } catch (error) {
      throw new Error(`Failed to get profile: ${error.message}`);
    }
  }

  static async deleteProfile(uid) {
    try {
      const db = getFirestore();
      if (!db) {
        throw new Error("Firestore not initialized");
      }

      await db.collection("users").doc(uid).delete();
      return { success: true };
    } catch (error) {
      throw new Error(`Failed to delete profile: ${error.message}`);
    }
  }
}

export default UserProfileService;
