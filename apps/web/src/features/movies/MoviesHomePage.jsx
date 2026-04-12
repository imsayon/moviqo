import { useEffect, useState } from "react";
import { getMovies } from "../shared/api.js";
import { GenreFilter } from "./GenreFilter.jsx";
import { MovieCard } from "./MovieCard.jsx";

export function MoviesHomePage() {
  const [genre, setGenre] = useState("All");
  const [genres, setGenres] = useState(["All"]);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    setLoading(true);
    setError("");

    getMovies(genre)
      .then((payload) => {
        if (ignore) return;
        setGenres(payload.genres);
        setMovies(payload.movies);
      })
      .catch((caughtError) => {
        if (ignore) return;
        setError(caughtError.message);
      })
      .finally(() => {
        if (!ignore) {
          setLoading(false);
        }
      });

    return () => {
      ignore = true;
    };
  }, [genre]);

  return (
    <section className="page-pad home-page">
      <div className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Curated movie nights, without the clutter</p>
          <h1>
            Cinema booking,
            <span> refined for modern screens.</span>
          </h1>
          <p className="hero-text">
            Moviqo turns the original single-page concept into a polished booking flow with live seat
            locking, faster navigation, and a cleaner premium visual language.
          </p>
        </div>

        <div className="hero-panel">
          <div className="hero-stat">
            <strong>06</strong>
            <span>Now showing</span>
          </div>
          <div className="hero-stat">
            <strong>3 taps</strong>
            <span>From film to confirmation</span>
          </div>
          <div className="hero-stat">
            <strong>Live</strong>
            <span>Seat availability</span>
          </div>
        </div>
      </div>

      <GenreFilter genres={genres} activeGenre={genre} onSelect={setGenre} />

      <div className="section-heading">
        <div>
          <p className="section-kicker">Now showing</p>
          <h2>Pick a film and move straight into the booking flow.</h2>
        </div>
        <span className="count-pill">{movies.length} titles</span>
      </div>

      {error ? <div className="status-card error">{error}</div> : null}

      {loading ? (
        <div className="movie-grid">
          {Array.from({ length: 6 }).map((_, index) => (
            <div className="movie-card skeleton-card" key={index} />
          ))}
        </div>
      ) : (
        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </section>
  );
}

