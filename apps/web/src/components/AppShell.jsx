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
      <div className="app-grain" aria-hidden="true" />
      <header className="navbar">
        <Link className="brand" to="/">
          <span className="brand-mark">🎬</span>
          <span>
            <strong>Moviqo</strong>
            <small>Book the moment.</small>
          </span>
        </Link>

        {!isHome ? (
          <Link className="nav-button" to="/">
            Browse films
          </Link>
        ) : (
          <span className="nav-status">Premium cinema booking</span>
        )}
      </header>

      <main>
        <Outlet context={{ notify }} />
      </main>

      <div className={`toast ${toast ? "show" : ""}`}>{toast}</div>
    </div>
  );
}

