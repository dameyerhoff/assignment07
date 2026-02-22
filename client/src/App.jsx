import { Route, Routes } from "react-router";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Reviews from "./pages/Reviews";
import ReviewForm from "./components/ReviewForm";

export default function App() {
  return (
    <div>
      <h2 className="text-red-400">My Assignment 07</h2>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/new-review" element={<ReviewForm />} />
      </Routes>
    </div>
  );
}
