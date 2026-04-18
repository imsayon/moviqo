import crypto from "node:crypto";
import { getMovieById } from "@moviqo/shared";

const reviewsByMovie = new Map();

export function getReviews(movieId) {
  const movie = getMovieById(movieId);
  if (!movie) {
    const error = new Error("Movie not found.");
    error.statusCode = 404;
    throw error;
  }

  const reviews = reviewsByMovie.get(movieId) || [];
  
  // Calculate average rating
  let averageRating = movie.rating; // Default to existing movie rating
  if (reviews.length > 0) {
    const sum = reviews.reduce((acc, rev) => acc + rev.rating, 0);
    // Average out of 10 instead of 5 to match existing UI, or just keep it 5 and UI multiplies by 2
    // Let's keep the user input rating as 1-5, and multiple by 2 for the 10-scale average, or just average it on a 5-scale.
    // The existing movie.rating is out of 10. Let's make user rating out of 5, then scale to 10 for consistency.
    const userAvg = sum / reviews.length;
    // Blend with existing rating like a real site, or just replace it. We'll replace it to show functionality.
    averageRating = Number((userAvg * 2).toFixed(1)); 
  }

  return {
    reviews,
    averageRating
  };
}

export function addReview(movieId, payload) {
  const movie = getMovieById(movieId);
  if (!movie) {
    const error = new Error("Movie not found.");
    error.statusCode = 404;
    throw error;
  }

  if (!payload.author || payload.author.trim() === "") {
    const error = new Error("Author name is required.");
    error.statusCode = 400;
    throw error;
  }

  if (!payload.rating || payload.rating < 1 || payload.rating > 5) {
    const error = new Error("Rating must be between 1 and 5.");
    error.statusCode = 400;
    throw error;
  }

  const review = {
    id: `RV${crypto.randomBytes(4).toString("hex").toUpperCase()}`,
    author: payload.author.trim(),
    rating: Number(payload.rating),
    comment: payload.comment ? payload.comment.trim() : "",
    createdAt: new Date().toISOString()
  };

  const existingReviews = reviewsByMovie.get(movieId) || [];
  // Add to beginning of array so newest is first
  reviewsByMovie.set(movieId, [review, ...existingReviews]);

  return review;
}
