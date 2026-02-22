import { Link } from "react-router";
import Article from "../components/Article";

export default function HomePage() {
  return (
    <div>
      <main>
        <section>
          <h2>Add to Our Database</h2>
          <p>
            Know an game we haven't reviewed? Help us grow our collection by
            submitting a new review.
          </p>
        </section>
      </main>

      <footer>
        <p>Game Reviews &copy; 2026 — Built for gamers.</p>
      </footer>
    </div>
  );
}
