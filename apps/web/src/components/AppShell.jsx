import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export function AppShell() {
  const location = useLocation();
  const [toast, setToast] = useState("");

  function notify(message) {
    setToast(message);
    window.clearTimeout(window.__moviqoToastTimer);
    window.__moviqoToastTimer = window.setTimeout(() => setToast(""), 2600);
  }

  const isHome = location.pathname === "/";

  return (
    <div className="app-shell">
      <div className="app-aurora app-aurora-left" aria-hidden="true" />
      <div className="app-aurora app-aurora-right" aria-hidden="true" />
      <div className="app-grain" aria-hidden="true" />
      <header className="navbar-shell">
        <div className="navbar">
          <Link className="brand" to="/">
            <span className="brand-mark">🎬</span>
            <span>
              <strong>Moviqo</strong>
              <small>Book the moment.</small>
            </span>
          </Link>

          <nav className="nav-links" aria-label="Primary">
            <a href="/#experience">Experience</a>
            <a href="/#dashboard">Dashboard</a>
            <a href="/#now-showing">Now Showing</a>
            <a href="/#footer">Contact</a>
          </nav>

          <div className="nav-actions">
            <span className="nav-status">Live seat maps</span>
            <a className="nav-button" href={isHome ? "#now-showing" : "/"}>
              {isHome ? "Explore films" : "Browse films"}
            </a>
          </div>
        </div>
      </header>

      <main>
        <Outlet context={{ notify }} />
      </main>

      <footer className="site-footer" id="footer">
        <div className="site-footer-inner">
          <div className="footer-brand-block">
            <div className="footer-brand-line">
              <span className="brand-mark footer-mark">🎬</span>
              <div>
                <strong>Moviqo</strong>
                <p>Editorial movie discovery and fast booking in one polished cinema surface.</p>
              </div>
            </div>
            <div className="footer-pills">
              <span>Live booking</span>
              <span>Premium seat maps</span>
              <span>React + Express monorepo</span>
            </div>
          </div>

          <div className="footer-grid">
            <div>
              <p className="footer-label">Platform</p>
              <a href="/#experience">Experience</a>
              <a href="/#dashboard">Dashboard</a>
              <a href="/#now-showing">Movies</a>
            </div>
            <div>
              <p className="footer-label">Booking</p>
              <Link to="/">Start a booking</Link>
              <Link to="/movie/1">See movie detail</Link>
              <Link to="/movie/1/seats?date=Today&time=10%3A30%20AM">Seat selection</Link>
            </div>
            <div>
              <p className="footer-label">Built For</p>
              <span>Multiplex launches</span>
              <span>Premium campaigns</span>
              <span>Fast product iteration</span>
            </div>
          </div>
        </div>
      </footer>

      <div className={`toast ${toast ? "show" : ""}`}>{toast}</div>
    </div>
  );
}
