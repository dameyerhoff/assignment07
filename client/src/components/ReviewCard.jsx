import { Link } from "react-router";
export default function ReviewCard({ name, review, score }) {
  console.log(review, name, score);
  return (
    <Link to={`/reviews/${review}`}>
      <div class="relative grid h-auto w-full max-w-md flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
        <div
          class={`absolute inset-0 m-0 h-full w-full overflow-hidden bg-transparent bg-[url('${review}')] bg-cover bg-clip-border bg-center text-red-700 shadow-none`}
        >
          <div class="absolute inset-0 w-full h-full bg-linear-to-t from-black/80 via-black/50 to-bg-black-10"></div>
        </div>
        <div class="relative p-6 px-6 py-14 md:px-12">
          <h2 class="mb-6 block font-sans text-4xl font-medium leading-normal tracking-normal text-white antialiased">
            {name}
          </h2>
          <h2 class="mb-6 block font-sans text-4xl font-medium leading-normal tracking-normal text-white antialiased">
            {review}
          </h2>
          <h2 class="mb-6 block font-sans text-4xl font-medium leading-normal tracking-normal text-white antialiased">
            {score}
          </h2>
        </div>
      </div>
    </Link>
  );
}
