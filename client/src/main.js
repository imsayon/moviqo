import "./app/styles.css";

const API_BASE = import.meta.env.VITE_API_URL || "/api";
const app = document.querySelector("#app");

const state = {
  toastTimer: 0,
  movies: [],
  genres: ["All"],
  selectedGenre: "All",
  selectedSeats: [],
  reviewRating: 0,
  confetti: Array.from({ length: 44 }, (_, index) => ({
    id: index,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 0.85}s`,
    duration: `${1.8 + Math.random() * 1.4}s`
  }))
};

const posterIcons = {
  "Quantum Horizon": "QH",
  "Neon Requiem": "NR",
  "Iron Ascension": "IA",
  "The Pale Architect": "PA",
  "Spectre Frequency": "SF",
  "Stellar Drift": "SD"
};

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

function formatCurrency(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(value);
}

function formatShowDate(dayOffset, label) {
  const date = new Date();
  date.setDate(date.getDate() + dayOffset);
  return {
    label: label === "Tomorrow" ? "Tmrw" : label,
    day: date.getDate()
  };
}

function formatBookingTimestamp(isoDate) {
  return new Date(isoDate).toLocaleString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function calculateBookingTotal(movie, seats, seatConfig) {
  return seats.reduce((total, seatId) => {
    const price = seatConfig.premiumRows.includes(seatId[0]) ? movie.price.premium : movie.price.standard;
    return total + price;
  }, seatConfig.bookingFee);
}

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function navigate(path) {
  window.history.pushState({}, "", path);
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function notify(message, type = "info") {
  const toast = document.querySelector("[data-toast]");
  if (!toast) return;
  toast.textContent = message;
  toast.dataset.type = type;
  toast.classList.add("show");
  window.clearTimeout(state.toastTimer);
  state.toastTimer = window.setTimeout(() => toast.classList.remove("show"), 3200);
}

function logoMark(size = "regular") {
  return `
    <span class="mq-logo mq-logo-${size}" aria-hidden="true">
      <span class="mq-film"><i></i><i></i><i></i><i></i></span>
      <span class="mq-ribbon mq-ribbon-a"></span>
      <span class="mq-ribbon mq-ribbon-b"></span>
      <span class="mq-ticket"><i></i></span>
    </span>
  `;
}

function posterArt(movie, size = "card") {
  const initials = posterIcons[movie.title] || movie.title.slice(0, 2).toUpperCase();
  return `
    <div class="poster-art poster-${size}" style="--poster-bg:${movie.poster.background}; --poster-glow:${movie.poster.glow}">
      <div class="poster-sheen"></div>
      <span class="poster-format">${escapeHtml(movie.formats?.[0] || movie.genre)}</span>
      <strong>${escapeHtml(initials)}</strong>
      <small>${escapeHtml(movie.genre)}</small>
    </div>
  `;
}

function shell(content) {
  app.innerHTML = `
    <div class="app-shell">
      <div class="kinetic-bg" aria-hidden="true">
        <span></span><span></span><span></span>
      </div>
      <div class="grid-grain" aria-hidden="true"></div>
      <header class="nav-shell">
        <div class="navbar">
          <a class="brand" href="/" data-link>
            ${logoMark()}
            <span><strong>MOVIQO</strong><small>Movie Ticket Booking</small></span>
          </a>
          <nav class="nav-links" aria-label="Primary">
            <a href="/#experience" data-link>Experience</a>
            <a href="/#now-showing" data-link>Movies</a>
            <a href="/movie/1/seats?date=Today&time=10%3A30%20AM" data-link>Seats</a>
            <a href="#footer">Disclaimer</a>
          </nav>
          <button class="nav-cta" type="button" data-route="/#now-showing">Browse films</button>
        </div>
      </header>
      <main>${content}</main>
      <footer class="site-footer" id="footer">
        <div class="footer-inner">
          <div class="footer-brand">
            ${logoMark("small")}
            <div>
              <strong>MOVIQO</strong>
              <p>Fast movie discovery, showtime selection, live seats, reviews, and demo booking in one polished flow.</p>
            </div>
          </div>
          <div class="footer-note">
            <span>Professional demo notice</span>
            <strong>All data is for demo purposes; nothing is real.</strong>
          </div>
        </div>
      </footer>
      <div class="toast" data-toast role="status" aria-live="polite"></div>
    </div>
  `;
  bindGlobalEvents();
}

function bindGlobalEvents() {
  document.querySelectorAll("[data-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      const url = new URL(link.href, window.location.origin);
      if (url.origin !== window.location.origin) return;
      event.preventDefault();
      navigate(`${url.pathname}${url.search}${url.hash}`);
      if (url.hash) document.querySelector(url.hash)?.scrollIntoView({ behavior: "smooth" });
    });
  });

  document.querySelectorAll("[data-route]").forEach((button) => {
    button.addEventListener("click", () => {
      navigate(button.dataset.route);
      if (button.dataset.route.includes("#")) {
        document.querySelector(button.dataset.route.slice(button.dataset.route.indexOf("#")))?.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
}

function loadingView(label = "Loading Moviqo...") {
  shell(`
    <section class="page-pad">
      <div class="status-card loading-card">
        ${logoMark("large")}
        <strong>${escapeHtml(label)}</strong>
        <span></span>
      </div>
    </section>
  `);
}

function errorView(message, action = `<button class="primary-button" data-route="/">Back home</button>`) {
  shell(`
    <section class="page-pad">
      <div class="status-card error">
        <strong>${escapeHtml(message)}</strong>
        ${action}
      </div>
    </section>
  `);
}

async function homePage() {
  loadingView("Loading tonight's films...");
  try {
    const payload = await request(
      `/movies${state.selectedGenre !== "All" ? `?genre=${encodeURIComponent(state.selectedGenre)}` : ""}`
    );
    state.movies = payload.movies;
    state.genres = payload.genres;
    renderHome();
  } catch (error) {
    errorView(error.message);
  }
}

function renderHome() {
  const movies = state.movies;
  const spotlight = movies[0];
  const topRated = [...movies].sort((left, right) => right.rating - left.rating)[0];
  const averagePrice = movies.length
    ? Math.round(movies.reduce((total, movie) => total + movie.price.standard, 0) / movies.length)
    : 0;

  shell(`
    <section class="home page-pad">
      <section class="hero">
        <div class="hero-copy reveal">
          <div class="logo-lockup">${logoMark("large")}<span>MOVIQO</span></div>
          <p class="eyebrow">Movie ticket booking and reservation application</p>
          <h1>Book the perfect seat before the opening frame lands.</h1>
          <p class="hero-text">A simple booking app with a sharper cinema identity: expressive motion, responsive seats, showtime clarity, and in-app feedback with no browser prompts.</p>
          <div class="hero-actions">
            <button class="primary-button" data-route="/#now-showing">Explore movies</button>
            ${spotlight ? `<button class="secondary-button" data-route="/movie/${spotlight.id}">Open spotlight</button>` : ""}
          </div>
          <div class="metrics">
            <article><strong>${String(movies.length).padStart(2, "0")}</strong><span>Films</span></article>
            <article><strong>${formatCurrency(averagePrice)}</strong><span>Starting average</span></article>
            <article><strong>${topRated?.rating || "9.1"}</strong><span>Top score</span></article>
          </div>
        </div>
        <div class="hero-visual reveal delay-1">
          <div class="orbit-ring"></div>
          ${spotlight ? posterArt(spotlight, "hero") : ""}
          <div class="floating-ticket">
            <span>Live seat map</span>
            <strong>${spotlight ? escapeHtml(spotlight.title) : "Tonight"}</strong>
          </div>
        </div>
      </section>

      <section class="experience-strip" id="experience">
        <article><span>01</span><strong>Animated, touch-friendly browsing</strong></article>
        <article><span>02</span><strong>Fast showtime and seat selection</strong></article>
        <article><span>03</span><strong>Clean demo booking confirmation</strong></article>
      </section>

      <section class="showcase">
        <div class="section-heading" id="now-showing">
          <div>
            <p class="section-kicker">Now showing</p>
            <h2>Choose a film and move straight into the booking flow.</h2>
          </div>
          <span class="count-pill">${movies.length} titles</span>
        </div>
        <div class="genre-row">
          ${state.genres
            .map(
              (genre) => `
                <button class="chip ${genre === state.selectedGenre ? "active" : ""}" data-genre="${escapeHtml(genre)}">
                  ${escapeHtml(genre)}
                </button>
              `
            )
            .join("")}
        </div>
        <div class="movie-grid">
          ${movies.map(movieCard).join("")}
        </div>
      </section>
    </section>
  `);

  document.querySelectorAll("[data-genre]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedGenre = button.dataset.genre;
      homePage();
    });
  });
}

function movieCard(movie) {
  return `
    <article class="movie-card reveal" data-route="/movie/${movie.id}" tabindex="0">
      ${movie.badgeLabel ? `<span class="badge">${escapeHtml(movie.badgeLabel)}</span>` : ""}
      ${posterArt(movie)}
      <div class="movie-card-body">
        <div>
          <h3>${escapeHtml(movie.title)}</h3>
          <p>${escapeHtml(movie.genre)} · ${escapeHtml(movie.duration)} · ${movie.year}</p>
        </div>
        <div class="movie-meta">
          <span>★ ${movie.rating}</span>
          <strong>${formatCurrency(movie.price.standard)}</strong>
        </div>
      </div>
    </article>
  `;
}

async function detailPage(movieId) {
  loadingView("Opening movie detail...");
  try {
    const { movie } = await request(`/movies/${movieId}`);
    renderDetail(movie);
  } catch (error) {
    errorView(error.message);
  }
}

function renderDetail(movie) {
  const defaultDate = movie.showDates[0]?.key || "";
  shell(`
    <section class="page-pad detail-page" data-movie-id="${movie.id}">
      <button class="back-link" data-route="/">Back to films</button>
      <div class="detail-hero">
        <div class="detail-poster-shell reveal">${posterArt(movie, "detail")}</div>
        <div class="detail-copy reveal delay-1">
          <div class="tag-row">
            ${[movie.genre, movie.duration, movie.year, ...movie.formats]
              .map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`)
              .join("")}
          </div>
          <h1>${escapeHtml(movie.title)}</h1>
          <button class="rating-link" data-route="/movie/${movie.id}/reviews">★ ${movie.rating} / 10 · Reviews</button>
          <div class="stats-grid">
            <article><span>Director</span><strong>${escapeHtml(movie.director)}</strong></article>
            <article><span>Language</span><strong>${escapeHtml(movie.lang)}</strong></article>
            <article><span>Cast</span><strong>${escapeHtml(movie.cast)}</strong></article>
          </div>
          <p class="detail-description">${escapeHtml(movie.description)}</p>
        </div>
      </div>
      <div class="detail-panels">
        <section class="glass-panel">
          <div class="section-subtitle">Choose a date</div>
          <div class="date-row">
            ${movie.showDates
              .map((date, index) => {
                const formatted = formatShowDate(date.dayOffset, date.label);
                return `<button class="date-card ${index === 0 ? "active" : ""}" data-date="${escapeHtml(date.key)}"><span>${escapeHtml(
                  formatted.label
                )}</span><strong>${formatted.day}</strong></button>`;
              })
              .join("")}
          </div>
        </section>
        <section class="glass-panel">
          <div class="section-subtitle">Choose a showtime</div>
          <div class="time-grid" data-times></div>
        </section>
      </div>
      <section class="proceed-bar">
        <div><span class="label">Selected show</span><strong data-selected-show>Choose a time slot</strong></div>
        <div><span class="label">Starts from</span><strong>${formatCurrency(movie.price.standard)}</strong></div>
        <button class="primary-button" data-continue>Select seats</button>
      </section>
    </section>
  `);

  const page = document.querySelector("[data-movie-id]");
  let selectedDate = defaultDate;
  let selectedTime = "";

  function drawTimes() {
    const activeDate = movie.showDates.find((date) => date.key === selectedDate) || movie.showDates[0];
    page.querySelector("[data-times]").innerHTML = activeDate.slots
      .map(
        (slot) => `
          <button class="time-card ${slot.soldOut ? "sold-out" : ""} ${selectedTime === slot.time ? "active" : ""}"
            data-time="${escapeHtml(slot.time)}" ${slot.soldOut ? "disabled" : ""}>
            <strong>${escapeHtml(slot.time)}</strong><span>${escapeHtml(slot.format)}</span>
          </button>
        `
      )
      .join("");

    page.querySelectorAll("[data-time]").forEach((button) => {
      button.addEventListener("click", () => {
        selectedTime = button.dataset.time;
        drawTimes();
        page.querySelector("[data-selected-show]").textContent = `${selectedDate} · ${selectedTime}`;
      });
    });
  }

  page.querySelectorAll("[data-date]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedDate = button.dataset.date;
      selectedTime = "";
      page.querySelectorAll("[data-date]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      page.querySelector("[data-selected-show]").textContent = "Choose a time slot";
      drawTimes();
    });
  });

  page.querySelector("[data-continue]").addEventListener("click", () => {
    if (!selectedTime) {
      notify("Select a showtime first.", "warn");
      return;
    }
    navigate(`/movie/${movie.id}/seats?${new URLSearchParams({ date: selectedDate, time: selectedTime })}`);
  });

  drawTimes();
}

async function seatsPage(movieId, params) {
  const date = params.get("date") || "";
  const time = params.get("time") || "";
  if (!date || !time) {
    errorView("Choose a date and showtime before selecting seats.", `<button class="primary-button" data-route="/movie/${movieId}">Back to showtimes</button>`);
    return;
  }

  loadingView("Loading live seat map...");
  try {
    const payload = await request(`/movies/${movieId}/seats?${new URLSearchParams({ date, time })}`);
    state.selectedSeats = [];
    renderSeats(payload.movie, payload.bookedSeats, payload.seatConfig, payload.format, date, time);
  } catch (error) {
    errorView(error.message, `<button class="primary-button" data-route="/movie/${movieId}">Back to showtimes</button>`);
  }
}

function renderSeats(movie, bookedSeats, seatConfig, format, date, time) {
  const booked = new Set(bookedSeats);
  shell(`
    <section class="page-pad seat-page">
      <button class="back-link" data-route="/movie/${movie.id}">Back to showtimes</button>
      <div class="section-heading compact">
        <div>
          <p class="section-kicker">Seat selection</p>
          <h1>${escapeHtml(movie.title)}</h1>
          <p class="detail-subline">${escapeHtml(date)} · ${escapeHtml(time)} · ${escapeHtml(format)}</p>
        </div>
      </div>
      <div class="seat-layout">
        <section class="seat-board">
          <div class="screen-mark"><span></span><p>Screen this way</p></div>
          <div class="seat-grid">
            ${seatConfig.rows.map(
              (row) => `
                <div class="seat-row">
                  <span class="row-label">${row}</span>
                  ${Array.from({ length: seatConfig.cols }, (_, index) => {
                    const number = index + 1;
                    const seatId = `${row}${number}`;
                    const premium = seatConfig.premiumRows.includes(row);
                    const aisle = number === 5 || number === 9;
                    return `
                      <span class="seat-cell ${aisle ? "aisle-left" : ""}">
                        <button class="seat ${premium ? "premium" : ""} ${booked.has(seatId) ? "booked" : ""}"
                          aria-label="Seat ${seatId}" data-seat="${seatId}" ${booked.has(seatId) ? "disabled" : ""}></button>
                      </span>
                    `;
                  }).join("")}
                  <span class="row-label">${row}</span>
                </div>
              `
            ).join("")}
          </div>
          <div class="legend">
            <span><i class="seat-demo"></i> Available</span>
            <span><i class="seat-demo premium"></i> Premium</span>
            <span><i class="seat-demo selected"></i> Selected</span>
            <span><i class="seat-demo booked"></i> Booked</span>
          </div>
        </section>
        <aside class="booking-card" data-summary></aside>
      </div>
    </section>
  `);

  function syncSummary() {
    const total = state.selectedSeats.length ? calculateBookingTotal(movie, state.selectedSeats, seatConfig) : 0;
    const premiumSeats = state.selectedSeats.filter((seat) => seatConfig.premiumRows.includes(seat[0]));
    const standardSeats = state.selectedSeats.filter((seat) => !seatConfig.premiumRows.includes(seat[0]));
    document.querySelector("[data-summary]").innerHTML = `
      <div class="booking-head"><h2>Your booking</h2><span>Demo checkout</span></div>
      <div class="booking-movie">
        <div class="mini-poster">${posterArt(movie, "mini")}</div>
        <div><strong>${escapeHtml(movie.title)}</strong><p>${escapeHtml(date)} · ${escapeHtml(time)}</p><p>${escapeHtml(movie.lang)} · ${escapeHtml(format)}</p></div>
      </div>
      <div class="seat-chip-row">
        ${
          state.selectedSeats.length
            ? state.selectedSeats.map((seat) => `<span class="seat-chip ${seatConfig.premiumRows.includes(seat[0]) ? "premium" : ""}">${seat}</span>`).join("")
            : `<span class="muted-copy">Tap seats on the map.</span>`
        }
      </div>
      <div class="price-block">
        <div class="price-line"><span>Standard</span><strong>${standardSeats.length} x ${formatCurrency(movie.price.standard)}</strong></div>
        <div class="price-line"><span>Premium</span><strong>${premiumSeats.length} x ${formatCurrency(movie.price.premium)}</strong></div>
        <div class="price-line"><span>Booking fee</span><strong>${formatCurrency(seatConfig.bookingFee)}</strong></div>
      </div>
      <div class="total-row"><span>Total</span><strong>${formatCurrency(total)}</strong></div>
      <button class="primary-button full-width" data-confirm ${state.selectedSeats.length ? "" : "disabled"}>Confirm booking</button>
    `;
    document.querySelector("[data-confirm]").addEventListener("click", async () => {
      if (!state.selectedSeats.length) {
        notify("Select at least one seat.", "warn");
        return;
      }
      const button = document.querySelector("[data-confirm]");
      button.disabled = true;
      button.textContent = "Confirming...";
      try {
        const payload = await request("/bookings", {
          method: "POST",
          body: JSON.stringify({ movieId: movie.id, date, showtime: time, seats: state.selectedSeats })
        });
        navigate(`/booking/${payload.booking.id}`);
      } catch (error) {
        notify(error.message, "error");
        button.disabled = false;
        button.textContent = "Confirm booking";
      }
    });
  }

  document.querySelectorAll("[data-seat]").forEach((button) => {
    button.addEventListener("click", () => {
      const seatId = button.dataset.seat;
      if (state.selectedSeats.includes(seatId)) {
        state.selectedSeats = state.selectedSeats.filter((seat) => seat !== seatId);
        button.classList.remove("selected");
      } else if (state.selectedSeats.length >= seatConfig.maxSeatsPerBooking) {
        notify(`Max ${seatConfig.maxSeatsPerBooking} seats per booking.`, "warn");
      } else {
        state.selectedSeats = [...state.selectedSeats, seatId];
        button.classList.add("selected");
      }
      syncSummary();
    });
  });

  syncSummary();
}

async function bookingPage(bookingId) {
  loadingView("Fetching booking...");
  try {
    const { booking } = await request(`/bookings/${bookingId}`);
    shell(`
      <section class="page-pad confirmation-page">
        <div class="confetti-layer" aria-hidden="true">
          ${state.confetti
            .map(
              (piece) =>
                `<span class="confetti-piece" style="left:${piece.left};animation-delay:${piece.delay};animation-duration:${piece.duration}"></span>`
            )
            .join("")}
        </div>
        <div class="confirmation-card">
          <p class="eyebrow">Booking confirmed</p>
          <h1>Your seats are locked in.</h1>
          <p class="hero-text">This confirmation was created through the Express API with demo data only.</p>
          <div class="ticket-card">
            ${[
              ["Booking ID", booking.id],
              ["Movie", booking.movieTitle],
              ["Date & time", `${booking.date} · ${booking.showtime}`],
              ["Seats", booking.seats.join(", ")],
              ["Format", booking.format],
              ["Booked on", formatBookingTimestamp(booking.bookedAt)],
              ["Total paid", formatCurrency(booking.total)]
            ]
              .map(([label, value]) => `<div class="ticket-line"><span>${label}</span><strong>${escapeHtml(value)}</strong></div>`)
              .join("")}
          </div>
          <div class="confirmation-actions">
            <button class="secondary-button" data-route="/">Browse more</button>
            <button class="primary-button" data-print>Print ticket</button>
          </div>
        </div>
      </section>
    `);
    document.querySelector("[data-print]").addEventListener("click", () => window.print());
  } catch (error) {
    errorView(error.message);
  }
}

async function reviewsPage(movieId) {
  loadingView("Loading reviews...");
  try {
    const [{ movie }, reviewsData] = await Promise.all([request(`/movies/${movieId}`), request(`/movies/${movieId}/reviews`)]);
    renderReviews(movie, reviewsData);
  } catch (error) {
    errorView(error.message);
  }
}

function renderReviews(movie, reviewsData) {
  shell(`
    <section class="page-pad reviews-page">
      <button class="back-link" data-route="/movie/${movie.id}">Back to ${escapeHtml(movie.title)}</button>
      <div class="reviews-hero">
        <div class="reviews-poster">${posterArt(movie, "list")}</div>
        <div>
          <p class="section-kicker">Community reviews</p>
          <h1>${escapeHtml(movie.title)}</h1>
          <div class="info-strip"><span class="rating-pill">★ ${reviewsData.averageRating} / 10</span><span>${reviewsData.reviews.length} reviews</span></div>
        </div>
      </div>
      <div class="reviews-content">
        <section class="glass-panel review-form-panel">
          <h2>Leave a review</h2>
          <form class="review-form" data-review-form>
            <label>Name<input name="author" maxlength="50" placeholder="Your name"></label>
            <label>Rating<div class="star-rating-input">
              ${[1, 2, 3, 4, 5].map((star) => `<button type="button" class="star-btn" data-star="${star}">★</button>`).join("")}
            </div></label>
            <label>Comment<textarea name="comment" maxlength="500" placeholder="What did you think?"></textarea></label>
            <button class="primary-button" type="submit">Submit review</button>
          </form>
        </section>
        <section class="reviews-list">
          <h2>Reviews</h2>
          <div class="reviews-grid">
            ${
              reviewsData.reviews.length
                ? reviewsData.reviews
                    .map(
                      (review) => `
                        <article class="review-card glass-panel">
                          <div class="review-header">
                            <div class="review-author"><span>${escapeHtml(review.author.charAt(0).toUpperCase())}</span><strong>${escapeHtml(review.author)}</strong></div>
                            <div>${Array.from({ length: 5 }, (_, index) => `<span class="star ${index < review.rating ? "active" : ""}">★</span>`).join("")}</div>
                          </div>
                          ${review.comment ? `<p>${escapeHtml(review.comment)}</p>` : ""}
                        </article>
                      `
                    )
                    .join("")
                : `<div class="empty-reviews">No reviews yet.</div>`
            }
          </div>
        </section>
      </div>
    </section>
  `);

  document.querySelectorAll("[data-star]").forEach((button) => {
    button.addEventListener("click", () => {
      state.reviewRating = Number(button.dataset.star);
      document.querySelectorAll("[data-star]").forEach((star) => star.classList.toggle("active", Number(star.dataset.star) <= state.reviewRating));
    });
  });

  document.querySelector("[data-review-form]").addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const author = String(form.get("author") || "").trim();
    const comment = String(form.get("comment") || "").trim();
    if (!author || state.reviewRating === 0) {
      notify("Add your name and star rating first.", "warn");
      return;
    }
    try {
      await request(`/movies/${movie.id}/reviews`, {
        method: "POST",
        body: JSON.stringify({ author, rating: state.reviewRating, comment })
      });
      notify("Review added.", "success");
      state.reviewRating = 0;
      reviewsPage(movie.id);
    } catch (error) {
      notify(error.message, "error");
    }
  });
}

function notFoundPage() {
  errorView("Page not found.");
}

function render() {
  const path = window.location.pathname;
  const params = new URLSearchParams(window.location.search);
  const movieMatch = path.match(/^\/movie\/(\d+)$/);
  const seatsMatch = path.match(/^\/movie\/(\d+)\/seats$/);
  const reviewsMatch = path.match(/^\/movie\/(\d+)\/reviews$/);
  const bookingMatch = path.match(/^\/booking\/([^/]+)$/);

  if (path === "/") homePage();
  else if (movieMatch) detailPage(movieMatch[1]);
  else if (seatsMatch) seatsPage(seatsMatch[1], params);
  else if (reviewsMatch) reviewsPage(reviewsMatch[1]);
  else if (bookingMatch) bookingPage(bookingMatch[1]);
  else notFoundPage();
}

window.addEventListener("popstate", render);
render();
