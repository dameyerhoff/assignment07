import { Link } from "react-router";

export default function Header() {
  return (
    <div>
      <h2 className="text-2xl font-mono text-amber-300">Reviews App</h2>
      <nav className="flex flex-row gap-5">
        <Link to="/">Home</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/new-review">Add a new review</Link>
      </nav>
    </div>
  );
}
