import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMovies } from "../shared/api.js";
import { formatCurrency } from "../shared/formatters.js";
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

  const spotlightMovie = movies[0];
  const queueMovies = movies.slice(0, 3);
  const topRatedMovie = [...movies].sort((left, right) => right.rating - left.rating)[0];
  const averagePrice =
    movies.length > 0
      ? Math.round(movies.reduce((total, movie) => total + movie.price.standard, 0) / movies.length)
      : 0;

  return (
    <section className="page-pad home-page">
      <section className="hero-canvas">
        <div className="hero">
          <div className="hero-copy hero-editorial">
            <p className="eyebrow">Curated movie nights, without the clutter</p>
            <h1>
              Make movie booking feel
              <span> like the opening scene.</span>
            </h1>
            <p className="hero-text">
              Moviqo now behaves like a launch-ready cinema product: clearer navigation, richer information
              density, live booking cues, and a more cinematic visual identity across the full page.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#now-showing">
                Start browsing
              </a>
              {spotlightMovie ? (
                <Link className="secondary-button" to={`/movie/${spotlightMovie.id}`}>
                  Open spotlight
                </Link>
              ) : null}
            </div>

            <div className="editorial-metrics">
              <article>
                <strong>{movies.length.toString().padStart(2, "0")}</strong>
                <span>Films ready tonight</span>
              </article>
              <article>
                <strong>{formatCurrency(averagePrice || 0)}</strong>
                <span>Average starting ticket</span>
              </article>
              <article>
                <strong>03 min</strong>
                <span>From browse to booking</span>
              </article>
            </div>
          </div>

          <div className="hero-panel hero-dashboard-card" id="dashboard">
            <div className="dashboard-head">
              <div>
                <p className="eyebrow small">Tonight&apos;s booking desk</p>
                <h2>Moviqo Command View</h2>
              </div>
              <span className="live-dot">Live</span>
            </div>

            <div className="dashboard-stage">
              <div className="dashboard-revenue">
                <span>Prime-time occupancy</span>
                <strong>84%</strong>
                <small>Late evening shows are converting faster than afternoon sessions.</small>
              </div>

              <div className="dashboard-curves" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="dashboard-grid">
              <article>
                <span>Fastest route</span>
                <strong>Film → Seats → Confirm</strong>
              </article>
              <article>
                <span>Popular category</span>
                <strong>{spotlightMovie?.genre || "Sci-Fi"} premium</strong>
              </article>
              <article>
                <span>Live queue</span>
                <strong>{queueMovies.length} active titles</strong>
              </article>
            </div>

            <div className="dashboard-queue">
              {queueMovies.map((movie, index) => (
                <div className="queue-row" key={movie.id}>
                  <span className="queue-index">0{index + 1}</span>
                  <div>
                    <strong>{movie.title}</strong>
                    <small>
                      {movie.genre} · {movie.duration}
                    </small>
                  </div>
                  <span className="queue-tag">{movie.badgeLabel || "Featured"}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="highlight-strip" id="experience">
          <article>
            <span className="section-kicker">Interactive seat map</span>
            <strong>Responsive premium seating with clearer actions and live locking.</strong>
          </article>
          <article>
            <span className="section-kicker">Editorial discovery</span>
            <strong>Sharper hierarchy, deeper sections, and stronger movie-first storytelling.</strong>
          </article>
          <article>
            <span className="section-kicker">Operational polish</span>
            <strong>Dashboard cues make the page feel like a real product, not a sample grid.</strong>
          </article>
        </div>
      </section>

      <GenreFilter genres={genres} activeGenre={genre} onSelect={setGenre} />

      <section className="content-dashboard">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Booking dashboard</p>
            <h2>Useful context before the user commits to a title.</h2>
          </div>
        </div>

        <div className="dashboard-panels">
          <article className="dashboard-panel large">
            <p className="dashboard-label">Spotlight title</p>
            <strong>{spotlightMovie?.title || "Loading..."}</strong>
            <span>
              {spotlightMovie
                ? `${spotlightMovie.genre} · ${spotlightMovie.duration} · from ${formatCurrency(spotlightMovie.price.standard)}`
                : "Waiting for live catalog"}
            </span>
            {spotlightMovie ? (
              <Link className="text-link" to={`/movie/${spotlightMovie.id}`}>
                Open movie detail
              </Link>
            ) : null}
          </article>

          <article className="dashboard-panel">
            <p className="dashboard-label">Top-rated tonight</p>
            <strong>{topRatedMovie?.title || "Loading..."}</strong>
            <span>{topRatedMovie ? `Audience score ${topRatedMovie.rating}/10` : "Calculating audience pull"}</span>
          </article>

          <article className="dashboard-panel">
            <p className="dashboard-label">Flow quality</p>
            <strong>Minimal friction</strong>
            <span>Feature modules, clear routing, and fewer dead-end interactions across the app.</span>
          </article>
        </div>
      </section>

      <div className="section-heading" id="now-showing">
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

      <section className="experience-grid">
        <article className="experience-card wide">
          <p className="section-kicker">Why it lands better</p>
          <h3>Less brochure, more cinema control center.</h3>
          <p>
            The landing page now has a narrative arc: orientation up top, context in the middle, and action
            below. That improves scanability and gives the interface a stronger product identity.
          </p>
        </article>

        <article className="experience-card">
          <p className="section-kicker">Navigation</p>
          <h3>Persistent shell</h3>
          <p>Sticky navbar, footer structure, anchor sections, and stronger page rhythm make it feel complete.</p>
        </article>

        <article className="experience-card">
          <p className="section-kicker">Visual identity</p>
          <h3>Sharper type + motion</h3>
          <p>Display-led headings, textured lighting, better contrast, and more intentional card interactions.</p>
        </article>
      </section>
    </section>
  );
}
