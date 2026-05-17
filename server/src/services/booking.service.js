import { getFirestore, admin } from "../../app/firebase.js";

/**
 * Booking Service
 * Manages movie bookings in Firestore
 */
export class BookingService {
  static async createBooking(uid, bookingData) {
    try {
      const db = getFirestore();
      if (!db) {
        throw new Error("Firestore not initialized");
      }

      const booking = {
        uid,
        movieId: bookingData.movieId,
        movieTitle: bookingData.movieTitle,
        selectedSeats: bookingData.selectedSeats,
        quantity: bookingData.quantity,
        totalPrice: bookingData.totalPrice,
        showtime: bookingData.showtime,
        bookingDate: new Date(),
        status: "confirmed",
        paymentMethod: bookingData.paymentMethod || "credit_card",
      };

      const docRef = await db.collection("bookings").add(booking);
      
      // Update user's bookings list
      await db.collection("users").doc(uid).update({
        bookings: admin.firestore.FieldValue.arrayUnion(docRef.id),
      });

      return { id: docRef.id, ...booking };
    } catch (error) {
      throw new Error(`Failed to create booking: ${error.message}`);
    }
  }

  static async getUserBookings(uid) {
    try {
      const db = getFirestore();
      if (!db) {
        throw new Error("Firestore not initialized");
      }

      const query = db.collection("bookings").where("uid", "==", uid).orderBy("bookingDate", "desc");
      const snapshot = await query.get();
      const bookings = [];

      snapshot.forEach((doc) => {
        bookings.push({ id: doc.id, ...doc.data() });
      });

      return bookings;
    } catch (error) {
      throw new Error(`Failed to get user bookings: ${error.message}`);
    }
  }

  static async getBooking(bookingId) {
    try {
      const db = getFirestore();
      if (!db) {
        throw new Error("Firestore not initialized");
      }

      const doc = await db.collection("bookings").doc(bookingId).get();
      
      if (!doc.exists()) {
        return null;
      }

      return { id: doc.id, ...doc.data() };
    } catch (error) {
      throw new Error(`Failed to get booking: ${error.message}`);
    }
  }

  static async cancelBooking(bookingId) {
    try {
      const db = getFirestore();
      if (!db) {
        throw new Error("Firestore not initialized");
      }

      await db.collection("bookings").doc(bookingId).update({
        status: "cancelled",
        cancelledAt: new Date(),
      });

      return { success: true };
    } catch (error) {
      throw new Error(`Failed to cancel booking: ${error.message}`);
    }
  }

  static async updateBookingStatus(bookingId, status) {
    try {
      const db = getFirestore();
      if (!db) {
        throw new Error("Firestore not initialized");
      }

      await db.collection("bookings").doc(bookingId).update({
        status,
        statusUpdatedAt: new Date(),
      });

      return { success: true };
    } catch (error) {
      throw new Error(`Failed to update booking status: ${error.message}`);
    }
  }

  static async getAllBookings(limit = 100) {
    try {
      const db = getFirestore();
      if (!db) {
        throw new Error("Firestore not initialized");
      }

      const query = db.collection("bookings").orderBy("bookingDate", "desc").limit(limit);
      const snapshot = await query.get();
      const bookings = [];

      snapshot.forEach((doc) => {
        bookings.push({ id: doc.id, ...doc.data() });
      });

      return bookings;
    } catch (error) {
      throw new Error(`Failed to get all bookings: ${error.message}`);
    }
  }
}

export default BookingService;
