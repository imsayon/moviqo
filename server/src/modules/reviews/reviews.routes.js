import { Router } from "express";
import { addReview, getReviews } from "./reviews.store.js";

export const reviewsRouter = Router({ mergeParams: true });

reviewsRouter.get("/", (request, response, next) => {
  try {
    const { movieId } = request.params;
    const data = getReviews(movieId);
    response.json(data);
  } catch (error) {
    next(error);
  }
});

reviewsRouter.post("/", (request, response, next) => {
  try {
    const { movieId } = request.params;
    const review = addReview(movieId, request.body);
    response.status(201).json({ review });
  } catch (error) {
    next(error);
  }
});
