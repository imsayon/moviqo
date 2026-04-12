import { BOOKING_FEE, PREMIUM_ROWS } from "@moviqo/shared";
import { formatCurrency } from "../shared/formatters.js";
import { PosterArt } from "../movies/PosterArt.jsx";

export function BookingSummary({
  movie,
  date,
  showtime,
  format,
  selectedSeats,
  total,
  onConfirm,
  submitting
}) {
  const premiumSeats = selectedSeats.filter((seat) => PREMIUM_ROWS.includes(seat[0]));
  const standardSeats = selectedSeats.filter((seat) => !PREMIUM_ROWS.includes(seat[0]));

  return (
    <aside className="booking-card">
      <div className="booking-head">
        <h2>Your booking</h2>
        <span>Secure checkout</span>
      </div>

      <div className="booking-movie">
        <div className="mini-poster">
          <PosterArt movie={movie} size="mini" />
        </div>
        <div>
          <strong>{movie.title}</strong>
          <p>
            {date} · {showtime}
          </p>
          <p>
            {movie.lang} · {format}
          </p>
        </div>
      </div>

      <div className="seat-chip-row">
        {selectedSeats.length === 0 ? (
          <span className="muted-copy">Tap seats on the map.</span>
        ) : (
          selectedSeats.map((seat) => (
            <span className={`seat-chip ${PREMIUM_ROWS.includes(seat[0]) ? "premium" : ""}`} key={seat}>
              {seat}
            </span>
          ))
        )}
      </div>

      <div className="price-block">
        <div className="price-line">
          <span>Standard</span>
          <strong>
            {standardSeats.length} × {formatCurrency(movie.price.standard)}
          </strong>
        </div>
        {premiumSeats.length ? (
          <div className="price-line">
            <span>Premium</span>
            <strong>
              {premiumSeats.length} × {formatCurrency(movie.price.premium)}
            </strong>
          </div>
        ) : null}
        <div className="price-line">
          <span>Booking fee</span>
          <strong>{formatCurrency(BOOKING_FEE)}</strong>
        </div>
      </div>

      <div className="total-row">
        <span>Total</span>
        <strong>{formatCurrency(total)}</strong>
      </div>

      <button
        className="primary-button full-width"
        disabled={selectedSeats.length === 0 || submitting}
        type="button"
        onClick={onConfirm}
      >
        {submitting ? "Confirming..." : "Confirm booking"}
      </button>
    </aside>
  );
}

