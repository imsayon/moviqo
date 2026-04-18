const API_BASE = import.meta.env.VITE_API_URL || "/api";

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {})
    },
    ...options
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(payload?.error?.message || "Request failed.");
  }

  return payload;
}

export function getMovies(genre = "All") {
  const query = genre && genre !== "All" ? `?genre=${encodeURIComponent(genre)}` : "";
  return request(`/movies${query}`);
}

export function getMovie(movieId) {
  return request(`/movies/${movieId}`);
}

export function getSeats(movieId, date, time) {
  const params = new URLSearchParams({ date, time });
  return request(`/movies/${movieId}/seats?${params.toString()}`);
}

export function createBooking(payload) {
  return request("/bookings", {
    method: "POST",
    body: JSON.stringify(payload)
  });
}

export function getBooking(bookingId) {
  return request(`/bookings/${bookingId}`);
}

export function getMovieReviews(movieId) {
  return request(`/movies/${movieId}/reviews`);
}

export function submitMovieReview(movieId, payload) {
  return request(`/movies/${movieId}/reviews`, {
    method: "POST",
    body: JSON.stringify(payload)
  });
}

