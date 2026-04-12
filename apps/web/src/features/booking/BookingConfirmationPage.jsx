import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getBooking } from "../shared/api.js";
import { formatBookingTimestamp, formatCurrency } from "../shared/formatters.js";

export function BookingConfirmationPage() {
  const { bookingId } = useParams();
  const [booking, setBooking] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    getBooking(bookingId)
      .then((payload) => {
        if (!ignore) {
          setBooking(payload.booking);
        }
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
  }, [bookingId]);

  const [confetti] = useState(() =>
    Array.from({ length: 42 }, (_, index) => ({
      id: index,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 0.8}s`,
      duration: `${1.6 + Math.random() * 1.5}s`
    }))
  );

  if (loading) {
    return <section className="page-pad status-card">Fetching your booking...</section>;
  }

  if (error || !booking) {
    return <section className="page-pad status-card error">{error || "Booking not found."}</section>;
  }

  return (
    <section className="page-pad confirmation-page">
      <div className="confetti-layer" aria-hidden="true">
        {confetti.map((piece) => (
          <span
            className="confetti-piece"
            key={piece.id}
            style={{ left: piece.left, animationDelay: piece.delay, animationDuration: piece.duration }}
          />
        ))}
      </div>

      <div className="confirmation-card">
        <p className="eyebrow">Booking confirmed</p>
        <h1>Your seats are locked in.</h1>
        <p className="hero-text">The booking was created through the Express API and is now available by booking ID.</p>

        <div className="ticket-card">
          <div className="ticket-line">
            <span>Booking ID</span>
            <strong className="booking-code">{booking.id}</strong>
          </div>
          <div className="ticket-line">
            <span>Movie</span>
            <strong>{booking.movieTitle}</strong>
          </div>
          <div className="ticket-line">
            <span>Date & time</span>
            <strong>
              {booking.date} · {booking.showtime}
            </strong>
          </div>
          <div className="ticket-line">
            <span>Seats</span>
            <strong>{booking.seats.join(", ")}</strong>
          </div>
          <div className="ticket-line">
            <span>Format</span>
            <strong>{booking.format}</strong>
          </div>
          <div className="ticket-line">
            <span>Booked on</span>
            <strong>{formatBookingTimestamp(booking.bookedAt)}</strong>
          </div>
          <div className="ticket-line">
            <span>Total paid</span>
            <strong>{formatCurrency(booking.total)}</strong>
          </div>
        </div>

        <div className="confirmation-actions">
          <Link className="secondary-button" to="/">
            Browse more
          </Link>
          <button className="primary-button" type="button" onClick={() => window.print()}>
            Print ticket
          </button>
        </div>
      </div>
    </section>
  );
}
