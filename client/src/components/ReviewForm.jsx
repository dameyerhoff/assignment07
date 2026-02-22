import { useState } from "react";

export default function ReviewForm() {
  const [formData, setFormData] = useState("");

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // 1. create our review -> need to do this first
    const reviewRes = await fetch(`http://localhost:8080/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const newReview = await reviewRes.json();
    console.log(newReview[0]);

    // 2. need to update the animals_habitats side

    await fetch(`http://localhost:8080/reviews/${newReview[0].id}}`, {
      // the actual content of the request is in the URL params - so we dont have a body. The end result is still making a new resource, so this should still be a post route
      method: "POST",
    });
  }

  return (
    <form
      className="flex flex-col justify-center items-center gap-2 bg-amber-200 p-5 max-w-[50vw]"
      onSubmit={handleSubmit}
    >
      <label htmlFor="">Game</label>
      <input
        name="game"
        onChange={handleChange}
        required
        className="bg-white text-black"
      />
      <label htmlFor="">Review</label>
      <input
        name="review"
        onChange={handleChange}
        required
        className="bg-white text-black"
      />
      <label htmlFor="">Score</label>
      <input
        name=" score"
        onChange={handleChange}
        required
        className="bg-white text-black"
      />

      <button type="submit" className="border-4 w-[200px]">
        Submit new review
      </button>
    </form>
  );
}
