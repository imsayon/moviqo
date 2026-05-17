import express from "express";
import { verifyAuth } from "../../middleware/auth.middleware.js";
import UserProfileService from "../../services/user-profile.service.js";
import BookingService from "../../services/booking.service.js";

const router = express.Router();

/**
 * POST /api/auth/profile
 * Create or get user profile after OAuth login
 * Requires: Firebase ID token
 */
router.post("/profile", verifyAuth, async (request, response) => {
  try {
    const { displayName, photoURL } = request.body;
    const { uid, email } = request.user;

    const profile = await UserProfileService.getOrCreateProfile(uid, {
      uid,
      email,
      displayName: displayName || request.user.displayName,
      photoURL: photoURL || request.user.photoURL,
    });

    response.status(200).json({
      success: true,
      data: profile,
    });
  } catch (error) {
    response.status(500).json({
      error: {
        message: "Failed to create/get profile",
        details: error.message,
      },
    });
  }
});

/**
 * GET /api/auth/profile
 * Get current user profile
 * Requires: Firebase ID token
 */
router.get("/profile", verifyAuth, async (request, response) => {
  try {
    const profile = await UserProfileService.getProfile(request.user.uid);

    if (!profile) {
      return response.status(404).json({
        error: {
          message: "Profile not found",
        },
      });
    }

    response.status(200).json({
      success: true,
      data: profile,
    });
  } catch (error) {
    response.status(500).json({
      error: {
        message: "Failed to get profile",
        details: error.message,
      },
    });
  }
});

/**
 * PUT /api/auth/profile
 * Update user profile
 * Requires: Firebase ID token
 */
router.put("/profile", verifyAuth, async (request, response) => {
  try {
    const { displayName, photoURL, preferences } = request.body;

    const updates = {};
    if (displayName) updates.displayName = displayName;
    if (photoURL) updates.photoURL = photoURL;
    if (preferences) updates.preferences = preferences;

    await UserProfileService.updateProfile(request.user.uid, updates);

    const profile = await UserProfileService.getProfile(request.user.uid);

    response.status(200).json({
      success: true,
      data: profile,
    });
  } catch (error) {
    response.status(500).json({
      error: {
        message: "Failed to update profile",
        details: error.message,
      },
    });
  }
});

/**
 * POST /api/auth/bookings
 * Create a new booking
 * Requires: Firebase ID token
 */
router.post("/bookings", verifyAuth, async (request, response) => {
  try {
    const { movieId, movieTitle, selectedSeats, quantity, totalPrice, showtime } = request.body;

    // Validate required fields
    if (!movieId || !movieTitle || !selectedSeats || !quantity || !totalPrice) {
      return response.status(400).json({
        error: {
          message: "Missing required booking fields",
        },
      });
    }

    const booking = await BookingService.createBooking(request.user.uid, {
      movieId,
      movieTitle,
      selectedSeats,
      quantity,
      totalPrice,
      showtime: showtime || new Date().toISOString(),
    });

    response.status(201).json({
      success: true,
      data: booking,
    });
  } catch (error) {
    response.status(500).json({
      error: {
        message: "Failed to create booking",
        details: error.message,
      },
    });
  }
});

/**
 * GET /api/auth/bookings
 * Get user's bookings
 * Requires: Firebase ID token
 */
router.get("/bookings", verifyAuth, async (request, response) => {
  try {
    const bookings = await BookingService.getUserBookings(request.user.uid);

    response.status(200).json({
      success: true,
      data: bookings,
    });
  } catch (error) {
    response.status(500).json({
      error: {
        message: "Failed to fetch bookings",
        details: error.message,
      },
    });
  }
});

/**
 * GET /api/auth/bookings/:bookingId
 * Get specific booking details
 * Requires: Firebase ID token
 */
router.get("/bookings/:bookingId", verifyAuth, async (request, response) => {
  try {
    const booking = await BookingService.getBooking(request.params.bookingId);

    if (!booking) {
      return response.status(404).json({
        error: {
          message: "Booking not found",
        },
      });
    }

    // Verify user owns this booking
    if (booking.uid !== request.user.uid) {
      return response.status(403).json({
        error: {
          message: "Unauthorized to access this booking",
        },
      });
    }

    response.status(200).json({
      success: true,
      data: booking,
    });
  } catch (error) {
    response.status(500).json({
      error: {
        message: "Failed to fetch booking",
        details: error.message,
      },
    });
  }
});

/**
 * DELETE /api/auth/bookings/:bookingId
 * Cancel a booking
 * Requires: Firebase ID token
 */
router.delete("/bookings/:bookingId", verifyAuth, async (request, response) => {
  try {
    const booking = await BookingService.getBooking(request.params.bookingId);

    if (!booking) {
      return response.status(404).json({
        error: {
          message: "Booking not found",
        },
      });
    }

    // Verify user owns this booking
    if (booking.uid !== request.user.uid) {
      return response.status(403).json({
        error: {
          message: "Unauthorized to cancel this booking",
        },
      });
    }

    await BookingService.cancelBooking(request.params.bookingId);

    response.status(200).json({
      success: true,
      message: "Booking cancelled successfully",
    });
  } catch (error) {
    response.status(500).json({
      error: {
        message: "Failed to cancel booking",
        details: error.message,
      },
    });
  }
});

export const authRouter = router;
export default router;
