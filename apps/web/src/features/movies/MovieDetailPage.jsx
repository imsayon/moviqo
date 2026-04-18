import { useEffect, useState } from "react";
import { Link, useNavigate, useOutletContext, useParams } from "react-router-dom";
import { getMovie } from "../shared/api.js";
import { formatCurrency, formatShowDate } from "../shared/formatters.js";
import { PosterArt } from "./PosterArt.jsx";

export function MovieDetailPage() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const { notify } = useOutletContext();
  const [movie, setMovie] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedShowtime, setSelectedShowtime] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    setError("");

    getMovie(movieId)
      .then((payload) => {
        if (ignore) return;

        setMovie(payload.movie);
        setSelectedDate(payload.movie.showDates[0]?.key || "");
        setSelectedShowtime("");
      })
      .catch((caughtError) => {
        if (!ignore) {
          setError(caughtError.message);
        }
      })
      .finally(() => {
        if (!ignore) {
          setLoading(false);
        }
      });

    return () => {
      ignore = true;
    };
  }, [movieId]);

  if (loading) {
    return <section className="page-pad status-card">Loading movie details...</section>;
  }

  if (error || !movie) {
    return <section className="page-pad status-card error">{error || "Movie not found."}</section>;
  }

  const activeDate = movie.showDates.find((date) => date.key === selectedDate) || movie.showDates[0];

  function handleContinue() {
    if (!selectedShowtime) {
      notify("Select a showtime first.");
      return;
    }

    const params = new URLSearchParams({
      date: selectedDate,
      time: selectedShowtime
    });

    navigate(`/movie/${movie.id}/seats?${params.toString()}`);
  }

  return (
    <section className="page-pad detail-page">
      <Link className="back-link" to="/">
        ← Back to films
      </Link>

      <div className="detail-hero">
        <div className="detail-poster-shell">
          <PosterArt movie={movie} size="detail" />
        </div>

        <div className="detail-copy">
          <div className="tag-row">
            <span className="tag">{movie.genre}</span>
            <span className="tag">{movie.duration}</span>
            <span className="tag">{movie.year}</span>
            {movie.formats.map((format) => (
              <span className="tag accent" key={format}>
                {format}
              </span>
            ))}
          </div>

          <h1>{movie.title}</h1>
          <div className="info-strip">
            <Link to={`/movie/${movie.id}/reviews`} className="rating-link">
              <span className="rating-pill">★ {movie.rating} / 10</span>
            </Link>
            <span>Audience score</span>
          </div>

          <div className="stats-grid">
            <article>
              <span>Director</span>
              <strong>{movie.director}</strong>
            </article>
            <article>
              <span>Language</span>
              <strong>{movie.lang}</strong>
            </article>
            <article>
              <span>Cast</span>
              <strong>{movie.cast}</strong>
            </article>
          </div>

          <p className="detail-description">{movie.description}</p>
        </div>
      </div>

      <div className="detail-panels">
        <section className="glass-panel">
          <div className="section-subtitle">Choose a date</div>
          <div className="date-row">
            {movie.showDates.map((date) => {
              const formatted = formatShowDate(date.dayOffset, date.label);
              return (
                <button
                  className={`date-card ${selectedDate === date.key ? "active" : ""}`}
                  key={date.key}
                  type="button"
                  onClick={() => {
                    setSelectedDate(date.key);
                    setSelectedShowtime("");
                  }}
                >
                  <span>{formatted.label}</span>
                  <strong>{formatted.day}</strong>
                </button>
              );
            })}
          </div>
        </section>

        <section className="glass-panel">
          <div className="section-subtitle">Choose a showtime</div>
          <div className="time-grid">
            {activeDate.slots.map((slot) => (
              <button
                className={`time-card ${selectedShowtime === slot.time ? "active" : ""}`}
                disabled={slot.soldOut}
                key={`${activeDate.key}-${slot.time}`}
                type="button"
                onClick={() => setSelectedShowtime(slot.time)}
              >
                <strong>{slot.time}</strong>
                <span>{slot.format}</span>
              </button>
            ))}
          </div>
        </section>
      </div>

      <section className="proceed-bar">
        <div>
          <span className="label">Selected show</span>
          <strong>{selectedShowtime ? `${selectedDate} · ${selectedShowtime}` : "Choose a time slot"}</strong>
        </div>
        <div>
          <span className="label">Starts from</span>
          <strong>{formatCurrency(movie.price.standard)}</strong>
        </div>
        <button className="primary-button" type="button" onClick={handleContinue}>
          Select seats
        </button>
      </section>
    </section>
  );
}

