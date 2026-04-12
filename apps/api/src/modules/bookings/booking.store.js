import crypto from "node:crypto";
import {
  BOOKING_FEE,
  MAX_SEATS_PER_BOOKING,
  calculateBookingTotal,
  getMovieById,
  getShowSelection,
  initialBookedSeats,
  isValidSeatId
} from "@moviqo/shared";

const liveReservations = new Map();
const bookingsById = new Map();

function getShowKey(movieId, date, showtime) {
  return `${movieId}:${date}:${showtime}`;
}

export function getBookedSeats(movieId, date, showtime) {
  const baseSeats = initialBookedSeats[movieId] || [];
  const liveSeats = liveReservations.get(getShowKey(movieId, date, showtime)) || [];
  return [...new Set([...baseSeats, ...liveSeats])].sort();
}

export function createBooking(payload) {
  const movie = getMovieById(payload.movieId);
  if (!movie) {
    const error = new Error("Movie not found.");
    error.statusCode = 404;
    throw error;
  }

  const selection = getShowSelection(movie, payload.date, payload.showtime);
  if (!selection || selection.selectedSlot.soldOut) {
    const error = new Error("The selected showtime is unavailable.");
    error.statusCode = 400;
    throw error;
  }

  if (!Array.isArray(payload.seats) || payload.seats.length === 0) {
    const error = new Error("Select at least one seat.");
    error.statusCode = 400;
    throw error;
  }

  const normalizedSeats = [...new Set(payload.seats.map((seat) => String(seat).trim().toUpperCase()))];

  if (normalizedSeats.length > MAX_SEATS_PER_BOOKING) {
    const error = new Error(`You can book up to ${MAX_SEATS_PER_BOOKING} seats per order.`);
    error.statusCode = 400;
    throw error;
  }

  if (!normalizedSeats.every(isValidSeatId)) {
    const error = new Error("One or more seat selections are invalid.");
    error.statusCode = 400;
    throw error;
  }

  const alreadyBooked = getBookedSeats(movie.id, payload.date, payload.showtime);
  const clashes = normalizedSeats.filter((seat) => alreadyBooked.includes(seat));

  if (clashes.length > 0) {
    const error = new Error(`Seats already booked: ${clashes.join(", ")}.`);
    error.statusCode = 409;
    throw error;
  }

  const bookingId = `MQ${crypto.randomBytes(4).toString("hex").toUpperCase()}`;
  const total = calculateBookingTotal(movie, normalizedSeats);
  const bookedAt = new Date().toISOString();
  const record = {
    id: bookingId,
    movieId: movie.id,
    movieTitle: movie.title,
    date: payload.date,
    showtime: payload.showtime,
    format: selection.selectedSlot.format,
    seats: normalizedSeats,
    total,
    fee: BOOKING_FEE,
    bookedAt
  };

  const showKey = getShowKey(movie.id, payload.date, payload.showtime);
  const existing = liveReservations.get(showKey) || [];
  liveReservations.set(showKey, [...existing, ...normalizedSeats]);
  bookingsById.set(bookingId, record);

  return record;
}

export function getBookingById(bookingId) {
  return bookingsById.get(bookingId) ?? null;
}

