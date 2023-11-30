import { FormEvent, FormEventHandler, useState } from "react";

export default function Home() {
  const [stars, setStars] = useState<number>(0);
  const [hoverStars, setHoverStars] = useState<number | null>(0);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const starsFromForm = event.currentTarget.rating.value;

    // You probably POST this
    console.log({
      stars: parseInt(starsFromForm),
    });
  };

  return (
    <>
      <div>Stars</div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            className="hidden-inp"
            type="number"
            name="rating"
            id="rating"
            value={stars}
            onChange={(event) => setStars(parseInt(event.target.value))}
          />
          <div className="stars">
            {/* <p>{stars}</p> */}
            {[1, 2, 3, 4, 5].map((num) => {
              return (
                <span
                  className="star-btn"
                  key={num}
                  onMouseEnter={() => setHoverStars(num)}
                  onMouseOut={() => setHoverStars(null)}
                  onClick={() => setStars(num)}
                >
                  {(!hoverStars && num <= stars) ||
                  (hoverStars && num <= hoverStars)
                    ? "★"
                    : "☆"}
                </span>
              );
            })}
          </div>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
