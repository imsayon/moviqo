import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="empty-state page-pad">
      <p className="eyebrow">Lost the reel</p>
      <h1>This page does not exist.</h1>
      <p>The route is missing, but the booking flow is intact.</p>
      <Link className="primary-button" to="/">
        Return home
      </Link>
    </section>
  );
}

