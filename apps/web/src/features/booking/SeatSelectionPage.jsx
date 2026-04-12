import { useEffect, useState } from "react";
import { COLS, MAX_SEATS_PER_BOOKING, PREMIUM_ROWS, ROWS, calculateBookingTotal } from "@moviqo/shared";
import { Link, useNavigate, useOutletContext, useParams, useSearchParams } from "react-router-dom";
import { createBooking, getSeats } from "../shared/api.js";
import { BookingSummary } from "./BookingSummary.jsx";

export function SeatSelectionPage() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const { notify } = useOutletContext();
  const [searchParams] = useSearchParams();
  const date = searchParams.get("date") || "";
  const time = searchParams.get("time") || "";

  const [movie, setMovie] = useState(null);
  const [bookedSeats, setBookedSeats] = useState([]);
  const [format, setFormat] = useState("");
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!date || !time) {
      setLoading(false);
      setError("Choose a date and showtime before selecting seats.");
      return undefined;
    }

    let ignore = false;

    setLoading(true);
    setError("");
    setSelectedSeats([]);

    getSeats(movieId, date, time)
      .then((payload) => {
        if (ignore) return;
        setMovie(payload.movie);
        setBookedSeats(payload.bookedSeats);
        setFormat(payload.format);
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
  }, [date, movieId, time]);

  const total = movie && selectedSeats.length > 0 ? calculateBookingTotal(movie, selectedSeats) : 0;

  function toggleSeat(seatId) {
    if (bookedSeats.includes(seatId)) return;

    setSelectedSeats((current) => {
      if (current.includes(seatId)) {
        return current.filter((seat) => seat !== seatId);
      }

      if (current.length >= MAX_SEATS_PER_BOOKING) {
        notify(`Max ${MAX_SEATS_PER_BOOKING} seats per booking.`);
        return current;
      }

      return [...current, seatId];
    });
  }

  async function handleConfirm() {
    if (!movie || selectedSeats.length === 0) {
      notify("Select at least one seat.");
      return;
    }

    try {
      setSubmitting(true);
      const payload = await createBooking({
        movieId: movie.id,
        date,
        showtime: time,
        seats: selectedSeats
      });

      navigate(`/booking/${payload.booking.id}`);
    } catch (caughtError) {
      notify(caughtError.message);
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return <section className="page-pad status-card">Loading live seat map...</section>;
  }

  if (error || !movie) {
    return (
      <section className="page-pad status-card error">
        {error || "Seat map unavailable."}
        <Link className="primary-button inline-button" to={`/movie/${movieId}`}>
          Back to showtimes
        </Link>
      </section>
    );
  }

  return (
    <section className="page-pad seat-page">
      <Link className="back-link" to={`/movie/${movie.id}`}>
        ← Back to showtimes
      </Link>

      <div className="section-heading compact">
        <div>
          <p className="section-kicker">Seat selection</p>
          <h1>{movie.title}</h1>
          <p className="detail-subline">
            {date} · {time} · {format}
          </p>
        </div>
      </div>

      <div className="seat-layout">
        <section className="seat-board">
          <div className="screen-mark">
            <span />
            <p>Screen this way</p>
          </div>

          <div className="seat-grid">
            {ROWS.map((row) => (
              <div className="seat-row" key={row}>
                <span className="row-label">{row}</span>
                {Array.from({ length: COLS }, (_, index) => {
                  const number = index + 1;
                  const seatId = `${row}${number}`;
                  const isBooked = bookedSeats.includes(seatId);
                  const isSelected = selectedSeats.includes(seatId);
                  const isPremium = PREMIUM_ROWS.includes(row);
                  const isAisle = number === 5 || number === 9;

                  return (
                    <div className={`seat-cell ${isAisle ? "aisle-left" : ""}`} key={seatId}>
                      <button
                        aria-label={`Seat ${seatId}`}
                        className={`seat ${isPremium ? "premium" : ""} ${isBooked ? "booked" : ""} ${
                          isSelected ? "selected" : ""
                        }`}
                        disabled={isBooked}
                        type="button"
                        onClick={() => toggleSeat(seatId)}
                      />
                    </div>
                  );
                })}
                <span className="row-label">{row}</span>
              </div>
            ))}
          </div>

          <div className="legend">
            <span>
              <i className="seat-demo" /> Available
            </span>
            <span>
              <i className="seat-demo premium" /> Premium
            </span>
            <span>
              <i className="seat-demo selected" /> Selected
            </span>
            <span>
              <i className="seat-demo booked" /> Booked
            </span>
          </div>
        </section>

        <BookingSummary
          movie={movie}
          date={date}
          showtime={time}
          format={format}
          selectedSeats={selectedSeats}
          total={total}
          onConfirm={handleConfirm}
          submitting={submitting}
        />
      </div>
    </section>
  );
}
