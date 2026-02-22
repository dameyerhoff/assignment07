import { useParams } from "react-router";
import { useEffect, useState } from "react";

export default function ReviewsPage() {
  // I want to read the URL to find out the ID of the animal I'm supposed to be displaying

  const { id } = useParams();
  console.log(id);

  // read this infromation from useParams
  // reviews/2
  // reviews/5
  // useParams gives us an object of {id: ????} // (whatever value they went to)

  const [reviewDetails, setReviewDetails] = useState(null);

  console.log(reviewDetails);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`http://localhost:8080/reviews/${id}`);
      const data = await res.json();
      console.log(data);

      // data is an array of 1 object - so data [0] so it's the first object in that array
      setReviewDetails(data[0]);
    }

    fetchData();
  }, []);

  return (
    <div>
      {reviewDetails ? (
        <div>
          <p>{reviewDetails.game}</p>
          <p>{reviewDetails.review}</p>
          <p>{reviewDetails.score}</p>
        </div>
      ) : (
        <p>{`Couldn't find that review >:(`}</p>
      )}
    </div>
  );
}
