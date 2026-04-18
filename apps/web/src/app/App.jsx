import { Route, Routes } from "react-router-dom";
import { AppShell } from "../components/AppShell.jsx";
import { BookingConfirmationPage } from "../features/booking/BookingConfirmationPage.jsx";
import { SeatSelectionPage } from "../features/booking/SeatSelectionPage.jsx";
import { MovieDetailPage } from "../features/movies/MovieDetailPage.jsx";
import { MovieReviewsPage } from "../features/movies/MovieReviewsPage.jsx";
import { MoviesHomePage } from "../features/movies/MoviesHomePage.jsx";
import { NotFoundPage } from "../features/shared/NotFoundPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<MoviesHomePage />} />
        <Route path="/movie/:movieId" element={<MovieDetailPage />} />
        <Route path="/movie/:movieId/reviews" element={<MovieReviewsPage />} />
        <Route path="/movie/:movieId/seats" element={<SeatSelectionPage />} />
        <Route path="/booking/:bookingId" element={<BookingConfirmationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

