import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  signOut, 
  onAuthStateChanged 
} from "firebase/auth";
import { 
  getFirestore, 
  doc, 
  setDoc, 
  getDoc, 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  where 
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    // Save/update user profile in DB
    await createUserProfile(user);
    return user;
  } catch (error) {
    console.error("Error signing in with Google", error);
    throw error;
  }
}

export async function logout() {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out", error);
    throw error;
  }
}

export async function createUserProfile(user) {
  const userRef = doc(db, "users", user.uid);
  const userSnap = await getDoc(userRef);
  
  if (!userSnap.exists()) {
    const { displayName, email, photoURL, uid } = user;
    const createdAt = new Date().toISOString();
    try {
      await setDoc(userRef, {
        uid,
        displayName,
        email,
        photoURL,
        createdAt
      });
    } catch (error) {
      console.error("Error creating user profile:", error);
    }
  }
}

export async function createBooking(bookingData) {
  try {
    const bookingsCol = collection(db, "bookings");
    const docRef = await addDoc(bookingsCol, {
      ...bookingData,
      status: "confirmed",
      createdAt: new Date().toISOString()
    });
    return { id: docRef.id, ...bookingData };
  } catch (error) {
    console.error("Error saving booking to Firestore:", error);
    throw error;
  }
}

export async function getBookedSeats(movieId, date, showtime) {
  try {
    const bookingsCol = collection(db, "bookings");
    const q = query(
      bookingsCol,
      where("movieId", "==", Number(movieId)),
      where("date", "==", date),
      where("showtime", "==", showtime)
    );
    const querySnapshot = await getDocs(q);
    const booked = [];
    querySnapshot.forEach(doc => {
      const data = doc.data();
      if (data.selectedSeats && Array.isArray(data.selectedSeats)) {
        booked.push(...data.selectedSeats);
      }
    });
    return booked;
  } catch (error) {
    console.error("Error getting booked seats:", error);
    return [];
  }
}

export async function getBooking(bookingId) {
  try {
    const bookingRef = doc(db, "bookings", bookingId);
    const bookingSnap = await getDoc(bookingRef);
    if (bookingSnap.exists()) {
      return bookingSnap.data();
    }
    throw new Error("Booking not found");
  } catch (error) {
    console.error("Error fetching booking:", error);
    throw error;
  }
}

export async function getReviews(movieId) {
  try {
    const reviewsCol = collection(db, "reviews");
    const q = query(reviewsCol, where("movieId", "==", Number(movieId)));
    const querySnapshot = await getDocs(q);
    const reviews = [];
    let totalRating = 0;
    querySnapshot.forEach(doc => {
      const data = doc.data();
      reviews.push(data);
      totalRating += Number(data.rating || 0);
    });
    
    // Sort by createdAt desc
    reviews.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    
    return {
      reviews,
      averageRating: reviews.length ? (totalRating / reviews.length).toFixed(1) : "0.0"
    };
  } catch (error) {
    console.error("Error getting reviews:", error);
    return { reviews: [], averageRating: "0.0" };
  }
}

export async function addReview(movieId, reviewData) {
  try {
    const reviewsCol = collection(db, "reviews");
    await addDoc(reviewsCol, {
      movieId: Number(movieId),
      ...reviewData,
      createdAt: new Date().toISOString()
    });
  } catch (error) {
    console.error("Error adding review:", error);
    throw error;
  }
}
