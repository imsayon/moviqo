import { Router } from "express";
import {
  BOOKING_FEE,
  COLS,
  MAX_SEATS_PER_BOOKING,
  PREMIUM_ROWS,
  RECLINER_ROWS,
  ROWS,
  getMovieById,
  getMovieSummaries,
  getShowSelection,
  listGenres
} from "../../data/cinema.js";
import { getBookedSeats } from "../bookings/booking.store.js";
import { reviewsRouter } from "../reviews/reviews.routes.js";

export const moviesRouter = Router();

moviesRouter.use("/:movieId/reviews", reviewsRouter);

moviesRouter.get("/", (request, response) => {
  const genre = request.query.genre ? String(request.query.genre) : "All";
  response.json({
    genres: listGenres(),
    movies: getMovieSummaries(genre)
  });
});

moviesRouter.get("/:movieId/poster", async (request, response, next) => {
  try {
    const movie = getMovieById(request.params.movieId);

    if (!movie?.poster) {
      const error = new Error("Poster not found.");
      error.statusCode = 404;
      return next(error);
    }

    const posterResponse = await fetch(movie.poster);
    if (!posterResponse.ok) {
      const error = new Error("Poster unavailable.");
      error.statusCode = 502;
      return next(error);
    }

    const contentType = posterResponse.headers.get("content-type") || "image/jpeg";
    const imageBuffer = Buffer.from(await posterResponse.arrayBuffer());

    response.setHeader("Content-Type", contentType);
    response.setHeader("Cache-Control", "public, max-age=86400");
    response.send(imageBuffer);
  } catch (error) {
    next(error);
  }
});

moviesRouter.get("/:movieId", (request, response, next) => {
  const movie = getMovieById(request.params.movieId);

  if (!movie) {
    const error = new Error("Movie not found.");
    error.statusCode = 404;
    return next(error);
  }

  response.json({ movie });
});

moviesRouter.get("/:movieId/seats", (request, response, next) => {
  const movie = getMovieById(request.params.movieId);
  const date = String(request.query.date || "");
  const showtime = String(request.query.time || "");

  if (!movie) {
    const error = new Error("Movie not found.");
    error.statusCode = 404;
    return next(error);
  }

  if (!date || !showtime) {
    const error = new Error("Date and showtime are required.");
    error.statusCode = 400;
    return next(error);
  }

  const selection = getShowSelection(movie, date, showtime);
  if (!selection) {
    const error = new Error("Showtime not found.");
    error.statusCode = 404;
    return next(error);
  }

  response.json({
    movie,
    date,
    showtime,
    format: selection.selectedSlot.format,
    bookedSeats: getBookedSeats(movie.id, date, showtime),
    seatConfig: {
      rows: ROWS,
      cols: COLS,
      premiumRows: PREMIUM_ROWS,
      reclinerRows: RECLINER_ROWS,
      bookingFee: BOOKING_FEE,
      maxSeatsPerBooking: MAX_SEATS_PER_BOOKING
    }
  });
});
