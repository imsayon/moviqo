export const ROWS = ["A", "B", "C", "D", "E", "F", "G", "H"];
export const COLS = 12;
export const PREMIUM_ROWS = ["D", "E", "F"];
export const BOOKING_FEE = 30;
export const MAX_SEATS_PER_BOOKING = 8;

export const movieCatalog = [
  {
    id: 1,
    title: "Quantum Horizon",
    genre: "Sci-Fi",
    rating: 9.1,
    duration: "2h 38m",
    year: 2025,
    lang: "English",
    formats: ["IMAX", "4DX", "Standard"],
    badge: "trending",
    badgeLabel: "Trending",
    description:
      "In a fractured timeline where quantum physics and human consciousness collide, a renegade scientist must race across alternate realities to prevent the total erasure of existence itself.",
    price: { standard: 280, premium: 420 },
    poster: {
      emoji: "🌌",
      background:
        "linear-gradient(160deg, #031326 0%, #10345b 55%, #0e86c8 100%)",
      glow: "#0e86c8"
    },
    director: "Denis Villeneuve",
    cast: "Zoe Saldana, Oscar Isaac",
    showDates: [
      {
        key: "Today",
        label: "Today",
        dayOffset: 0,
        slots: [
          { time: "10:30 AM", format: "IMAX", soldOut: false },
          { time: "1:45 PM", format: "4DX", soldOut: true },
          { time: "5:00 PM", format: "Standard", soldOut: false },
          { time: "8:15 PM", format: "IMAX", soldOut: true },
          { time: "11:30 PM", format: "4DX", soldOut: false }
        ]
      },
      {
        key: "Tomorrow",
        label: "Tomorrow",
        dayOffset: 1,
        slots: [
          { time: "11:00 AM", format: "IMAX", soldOut: false },
          { time: "2:30 PM", format: "4DX", soldOut: true },
          { time: "6:00 PM", format: "Standard", soldOut: false },
          { time: "9:15 PM", format: "IMAX", soldOut: true }
        ]
      },
      {
        key: "Wed",
        label: "Wed",
        dayOffset: 2,
        slots: [
          { time: "10:00 AM", format: "IMAX", soldOut: false },
          { time: "1:15 PM", format: "4DX", soldOut: true },
          { time: "4:45 PM", format: "Standard", soldOut: false },
          { time: "8:00 PM", format: "IMAX", soldOut: true }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Neon Requiem",
    genre: "Thriller",
    rating: 8.7,
    duration: "2h 12m",
    year: 2025,
    lang: "English",
    formats: ["Dolby Atmos", "Standard"],
    badge: "new",
    badgeLabel: "New",
    description:
      "A neo-noir psychological thriller set in a rain-soaked megalopolis, where a disgraced detective unravels a conspiracy that runs deeper than the city's neon-lit underground.",
    price: { standard: 260, premium: 390 },
    poster: {
      emoji: "🌆",
      background:
        "linear-gradient(160deg, #150412 0%, #3d0b35 50%, #ff6b6b 100%)",
      glow: "#ff6b6b"
    },
    director: "Park Chan-wook",
    cast: "Margot Robbie, Idris Elba",
    showDates: [
      {
        key: "Today",
        label: "Today",
        dayOffset: 0,
        slots: [
          { time: "12:00 PM", format: "Dolby Atmos", soldOut: false },
          { time: "3:30 PM", format: "Standard", soldOut: true },
          { time: "7:00 PM", format: "Dolby Atmos", soldOut: false },
          { time: "10:30 PM", format: "Standard", soldOut: true }
        ]
      },
      {
        key: "Tomorrow",
        label: "Tomorrow",
        dayOffset: 1,
        slots: [
          { time: "1:00 PM", format: "Dolby Atmos", soldOut: false },
          { time: "4:15 PM", format: "Standard", soldOut: true },
          { time: "7:45 PM", format: "Dolby Atmos", soldOut: false },
          { time: "11:00 PM", format: "Standard", soldOut: true }
        ]
      },
      {
        key: "Wed",
        label: "Wed",
        dayOffset: 2,
        slots: [
          { time: "2:00 PM", format: "Dolby Atmos", soldOut: false },
          { time: "5:30 PM", format: "Standard", soldOut: true },
          { time: "9:00 PM", format: "Dolby Atmos", soldOut: false }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Iron Ascension",
    genre: "Action",
    rating: 8.3,
    duration: "2h 25m",
    year: 2025,
    lang: "English",
    formats: ["IMAX", "Standard"],
    badge: "exclusive",
    badgeLabel: "Exclusive",
    description:
      "The world's last free-standing megacity is under siege. One soldier. Zero backup. Maximum force. An adrenaline-fueled descent into the most brutal urban warfare ever filmed.",
    price: { standard: 300, premium: 440 },
    poster: {
      emoji: "⚔️",
      background:
        "linear-gradient(160deg, #1f0900 0%, #6e2400 50%, #ff9b3d 100%)",
      glow: "#ff9b3d"
    },
    director: "Chad Stahelski",
    cast: "John Boyega, Ana de Armas",
    showDates: [
      {
        key: "Today",
        label: "Today",
        dayOffset: 0,
        slots: [
          { time: "9:00 AM", format: "IMAX", soldOut: false },
          { time: "12:30 PM", format: "Standard", soldOut: true },
          { time: "4:00 PM", format: "IMAX", soldOut: false },
          { time: "7:30 PM", format: "Standard", soldOut: true },
          { time: "11:00 PM", format: "IMAX", soldOut: false }
        ]
      },
      {
        key: "Tomorrow",
        label: "Tomorrow",
        dayOffset: 1,
        slots: [
          { time: "10:00 AM", format: "IMAX", soldOut: false },
          { time: "1:30 PM", format: "Standard", soldOut: true },
          { time: "5:00 PM", format: "IMAX", soldOut: false },
          { time: "8:30 PM", format: "Standard", soldOut: true }
        ]
      },
      {
        key: "Wed",
        label: "Wed",
        dayOffset: 2,
        slots: [
          { time: "11:00 AM", format: "IMAX", soldOut: false },
          { time: "2:30 PM", format: "Standard", soldOut: true },
          { time: "6:00 PM", format: "IMAX", soldOut: false },
          { time: "9:30 PM", format: "Standard", soldOut: true }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "The Pale Architect",
    genre: "Drama",
    rating: 9.4,
    duration: "3h 02m",
    year: 2025,
    lang: "English / French",
    formats: ["Dolby", "Standard"],
    badge: null,
    badgeLabel: null,
    description:
      "An aging architect discovers his life's magnum opus was built on buried secrets. A meditation on legacy, guilt, and the weight of creation.",
    price: { standard: 240, premium: 360 },
    poster: {
      emoji: "🏛️",
      background:
        "linear-gradient(160deg, #121416 0%, #353d47 55%, #d8b26e 100%)",
      glow: "#d8b26e"
    },
    director: "Christopher Nolan",
    cast: "Anthony Hopkins, Cate Blanchett",
    showDates: [
      {
        key: "Today",
        label: "Today",
        dayOffset: 0,
        slots: [
          { time: "11:00 AM", format: "Dolby", soldOut: false },
          { time: "2:30 PM", format: "Standard", soldOut: true },
          { time: "6:30 PM", format: "Dolby", soldOut: false }
        ]
      },
      {
        key: "Tomorrow",
        label: "Tomorrow",
        dayOffset: 1,
        slots: [
          { time: "12:00 PM", format: "Dolby", soldOut: false },
          { time: "3:30 PM", format: "Standard", soldOut: true },
          { time: "7:30 PM", format: "Dolby", soldOut: false }
        ]
      },
      {
        key: "Wed",
        label: "Wed",
        dayOffset: 2,
        slots: [
          { time: "1:00 PM", format: "Dolby", soldOut: false },
          { time: "4:30 PM", format: "Standard", soldOut: true },
          { time: "8:30 PM", format: "Dolby", soldOut: false }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Spectre Frequency",
    genre: "Horror",
    rating: 8.1,
    duration: "1h 58m",
    year: 2025,
    lang: "English",
    formats: ["Dolby Atmos", "Standard"],
    badge: "new",
    badgeLabel: "New",
    description:
      "A broadcast engineer working the night shift intercepts a signal from a frequency that should not exist. What follows is a relentless psychological unraveling that blurs broadcast and reality.",
    price: { standard: 250, premium: 375 },
    poster: {
      emoji: "📡",
      background:
        "linear-gradient(160deg, #08120b 0%, #0b3f2b 55%, #4fd18b 100%)",
      glow: "#4fd18b"
    },
    director: "Ari Aster",
    cast: "Florence Pugh, Barry Keoghan",
    showDates: [
      {
        key: "Today",
        label: "Today",
        dayOffset: 0,
        slots: [
          { time: "1:00 PM", format: "Dolby Atmos", soldOut: false },
          { time: "4:30 PM", format: "Standard", soldOut: true },
          { time: "8:00 PM", format: "Dolby Atmos", soldOut: false },
          { time: "11:30 PM", format: "Standard", soldOut: true }
        ]
      },
      {
        key: "Tomorrow",
        label: "Tomorrow",
        dayOffset: 1,
        slots: [
          { time: "2:00 PM", format: "Dolby Atmos", soldOut: false },
          { time: "5:30 PM", format: "Standard", soldOut: true },
          { time: "9:00 PM", format: "Dolby Atmos", soldOut: false }
        ]
      },
      {
        key: "Wed",
        label: "Wed",
        dayOffset: 2,
        slots: [
          { time: "3:00 PM", format: "Dolby Atmos", soldOut: false },
          { time: "6:30 PM", format: "Standard", soldOut: true },
          { time: "10:00 PM", format: "Dolby Atmos", soldOut: false }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Stellar Drift",
    genre: "Sci-Fi",
    rating: 8.9,
    duration: "2h 18m",
    year: 2025,
    lang: "English",
    formats: ["IMAX", "Dolby", "Standard"],
    badge: "top-rated",
    badgeLabel: "Top Rated",
    description:
      "When the last generation ship loses its navigation system 40 years from Earth, the crew must confront not just the void of deep space but each other in this science fiction epic.",
    price: { standard: 270, premium: 400 },
    poster: {
      emoji: "🚀",
      background:
        "linear-gradient(160deg, #020812 0%, #08386a 50%, #78d4ff 100%)",
      glow: "#78d4ff"
    },
    director: "James Cameron",
    cast: "Ryan Gosling, Lupita Nyongo",
    showDates: [
      {
        key: "Today",
        label: "Today",
        dayOffset: 0,
        slots: [
          { time: "10:00 AM", format: "IMAX", soldOut: false },
          { time: "1:00 PM", format: "Dolby", soldOut: true },
          { time: "4:00 PM", format: "Standard", soldOut: false },
          { time: "7:00 PM", format: "IMAX", soldOut: true },
          { time: "10:00 PM", format: "Dolby", soldOut: false }
        ]
      },
      {
        key: "Tomorrow",
        label: "Tomorrow",
        dayOffset: 1,
        slots: [
          { time: "11:00 AM", format: "IMAX", soldOut: false },
          { time: "2:00 PM", format: "Dolby", soldOut: true },
          { time: "5:00 PM", format: "Standard", soldOut: false },
          { time: "8:00 PM", format: "IMAX", soldOut: true }
        ]
      },
      {
        key: "Wed",
        label: "Wed",
        dayOffset: 2,
        slots: [
          { time: "10:30 AM", format: "IMAX", soldOut: false },
          { time: "1:30 PM", format: "Dolby", soldOut: true },
          { time: "4:30 PM", format: "Standard", soldOut: false },
          { time: "7:30 PM", format: "IMAX", soldOut: true }
        ]
      }
    ]
  }
];

export const initialBookedSeats = {
  1: ["A3", "A4", "B5", "B6", "C2", "C3", "D4", "D5", "D6", "D10", "E3", "E7", "E11", "F5", "F6", "F9", "G4", "G8", "H2", "H3", "H10"],
  2: ["A1", "A9", "B3", "B4", "C5", "C6", "D2", "D3", "D9", "E4", "E5", "E8", "F1", "F2", "F10", "G5", "G6", "H7", "H8", "H11"],
  3: ["A5", "A6", "B1", "B2", "C3", "C8", "C11", "D7", "D8", "E2", "E3", "E9", "F4", "F5", "F11", "G1", "G6", "G10", "H4", "H9"],
  4: ["A7", "A8", "B5", "B9", "C4", "C10", "D1", "D2", "D11", "E6", "E7", "F3", "F9", "G2", "G7", "H1", "H5", "H12"],
  5: ["A3", "A10", "B4", "B5", "C6", "C7", "D3", "D8", "D12", "E1", "E9", "F2", "F6", "F11", "G4", "G5", "H3", "H7", "H11"],
  6: ["A2", "A9", "B3", "B7", "B11", "C1", "C5", "C10", "D4", "D9", "E2", "E6", "E11", "F3", "F8", "G5", "G10", "H2", "H6", "H9"]
};

export function listGenres() {
  return ["All", ...new Set(movieCatalog.map((movie) => movie.genre))];
}

export function getMovieById(id) {
  return movieCatalog.find((movie) => movie.id === Number(id)) ?? null;
}

export function getMovieSummaries(genre = "All") {
  const filtered =
    !genre || genre === "All"
      ? movieCatalog
      : movieCatalog.filter((movie) => movie.genre === genre);

  return filtered.map((movie) => ({
    id: movie.id,
    title: movie.title,
    genre: movie.genre,
    rating: movie.rating,
    duration: movie.duration,
    year: movie.year,
    badge: movie.badge,
    badgeLabel: movie.badgeLabel,
    price: movie.price,
    poster: movie.poster
  }));
}

export function getShowSelection(movie, dateKey, showtime) {
  if (!movie) return null;

  const selectedDate = movie.showDates.find((date) => date.key === dateKey);
  if (!selectedDate) return null;

  const selectedSlot = selectedDate.slots.find((slot) => slot.time === showtime);
  if (!selectedSlot) return null;

  return { selectedDate, selectedSlot };
}

export function isPremiumSeat(seatId) {
  return PREMIUM_ROWS.includes(String(seatId).charAt(0));
}

export function isValidSeatId(seatId) {
  return /^[A-H](?:[1-9]|1[0-2])$/.test(String(seatId));
}

export function calculateBookingTotal(movie, seats) {
  return seats.reduce((total, seatId) => {
    return total + (isPremiumSeat(seatId) ? movie.price.premium : movie.price.standard);
  }, BOOKING_FEE);
}

