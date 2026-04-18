import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMovie, getMovieReviews, submitMovieReview } from "../shared/api.js";
import { PosterArt } from "./PosterArt.jsx";

export function MovieReviewsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [reviewsData, setReviewsData] = useState({ reviews: [], averageRating: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Form state
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    
    Promise.all([getMovie(movieId), getMovieReviews(movieId)])
      .then(([moviePayload, reviewsPayload]) => {
        if (ignore) return;
        setMovie(moviePayload.movie);
        setReviewsData(reviewsPayload);
      })
      .catch((err) => {
        if (!ignore) setError(err.message);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => { ignore = true; };
  }, [movieId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!author.trim() || rating === 0) {
      alert("Please provide a name and a star rating.");
      return;
    }

    setSubmitting(true);
    try {
      await submitMovieReview(movieId, { author, rating, comment });
      // Refresh reviews
      const payload = await getMovieReviews(movieId);
      setReviewsData(payload);
      // Reset form
      setAuthor("");
      setRating(0);
      setComment("");
    } catch (err) {
      alert(err.message || "Failed to submit review");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <section className="page-pad status-card">Loading reviews...</section>;
  }

  if (error || !movie) {
    return <section className="page-pad status-card error">{error || "Movie not found."}</section>;
  }

  return (
    <section className="page-pad detail-page">
      <Link className="back-link" to={`/movie/${movieId}`}>
        ← Back to {movie.title}
      </Link>

      <div className="reviews-hero">
        <div className="reviews-poster">
          <PosterArt movie={movie} size="list" />
        </div>
        <div className="reviews-summary">
          <h1>{movie.title} Reviews</h1>
          <div className="info-strip">
            <span className="rating-pill">★ {reviewsData.averageRating} / 10</span>
            <span>{reviewsData.reviews.length} Review{reviewsData.reviews.length !== 1 ? 's' : ''}</span>
          </div>
        </div>
      </div>

      <div className="reviews-content">
        <section className="glass-panel review-form-panel">
          <h2>Leave a Review</h2>
          <form className="review-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="author">Name</label>
              <input
                id="author"
                placeholder="What's your name?"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                maxLength={50}
              />
            </div>
            
            <div className="form-group">
              <label>Rating</label>
              <div className="star-rating-input">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className={`star-btn ${star <= rating ? "active" : ""}`}
                    onClick={() => setRating(star)}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="comment">Comment (Optional)</label>
              <textarea
                id="comment"
                placeholder="What did you think of the movie?"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                maxLength={500}
              />
            </div>

            <button type="submit" className="primary-button" disabled={submitting}>
              {submitting ? "Submitting..." : "Submit Review"}
            </button>
          </form>
        </section>

        <section className="reviews-list">
          <h2>Community Reviews</h2>
          {reviewsData.reviews.length === 0 ? (
            <div className="empty-reviews">
              <p>No reviews yet. Be the first to review {movie.title}!</p>
            </div>
          ) : (
            <div className="reviews-grid">
              {reviewsData.reviews.map((rev) => (
                <div key={rev.id} className="review-card glass-panel">
                  <div className="review-header">
                    <div className="review-author">
                      <div className="author-avatar">{rev.author.charAt(0).toUpperCase()}</div>
                      <strong>{rev.author}</strong>
                    </div>
                    <div className="review-rating">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className={`star ${i < rev.rating ? "active" : ""}`}>★</span>
                      ))}
                    </div>
                  </div>
                  {rev.comment && <p className="review-comment">{rev.comment}</p>}
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </section>
  );
}
