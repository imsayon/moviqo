import { Router } from "express";
import { getMovieById, getMovieSummaries, getShowSelection, listGenres } from "@moviqo/shared";
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
    bookedSeats: getBookedSeats(movie.id, date, showtime)
  });
});

