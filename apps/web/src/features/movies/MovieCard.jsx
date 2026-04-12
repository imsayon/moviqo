import { Link } from "react-router-dom";
import { formatCurrency } from "../shared/formatters.js";
import { PosterArt } from "./PosterArt.jsx";

export function MovieCard({ movie }) {
  return (
    <Link className="movie-card" to={`/movie/${movie.id}`}>
      <div className="card-poster">
        <PosterArt movie={movie} />
        {movie.badge ? <span className={`badge badge-${movie.badge}`}>{movie.badgeLabel}</span> : null}
        <div className="card-overlay">
          <span className="ghost-button">Book now</span>
        </div>
      </div>

      <div className="card-content">
        <div className="card-title-row">
          <h3>{movie.title}</h3>
          <span className="rating-pill small">★ {movie.rating}</span>
        </div>
        <p className="card-meta">
          <span>{movie.genre}</span>
          <span>{movie.duration}</span>
          <span>{movie.year}</span>
        </p>
        <p className="card-price">From {formatCurrency(movie.price.standard)}</p>
      </div>
    </Link>
  );
}

