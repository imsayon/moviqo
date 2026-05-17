import { Router } from "express";
import { createBooking, getBookingById } from "./booking.store.js";

export const bookingsRouter = Router();

bookingsRouter.post("/", (request, response, next) => {
  try {
    const booking = createBooking(request.body);
    response.status(201).json({ booking });
  } catch (error) {
    next(error);
  }
});

bookingsRouter.get("/:bookingId", (request, response, next) => {
  const booking = getBookingById(request.params.bookingId);

  if (!booking) {
    const error = new Error("Booking not found.");
    error.statusCode = 404;
    return next(error);
  }

  response.json({ booking });
});

