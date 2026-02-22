import { useState, useEffect } from "react";
import ReviewCard from "../components/ReviewCard";
export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  console.log(reviews);

  useEffect(() => {
    async function fetchData() {
      // fetch() makes a GET request by default
      const res = await fetch(`http://localhost:8080/reviews`);
      const data = await res.json();
      setReviews(data);
    }
    fetchData();
  }, []);
  return (
    <div>
      <h2>All Reviews:</h2>

      <div className="flex flex-row flex-wrap gap-10">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <ReviewCard
              name={review.game}
              review={review.review}
              score={review.score}
            />
          ))
        ) : (
          <p>Loading....</p>
        )}
      </div>
    </div>
  );
}
