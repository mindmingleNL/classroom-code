import NavButton from "@/components/NavButton";
import { useState } from "react";

// const someData = [3, 8, 12, 4, 19, 30, 90, 90];

interface Recipe {
  title: string;
  servings: number;
  duration: number;
  veg: boolean;
}

const recipes: Recipe[] = [
  { title: "Spaghetti Carbonara", servings: 4, duration: 30, veg: false },
  { title: "Chicken Curry", servings: 6, duration: 45, veg: false },
  { title: "Beef Stroganoff", servings: 5, duration: 40, veg: false },
  { title: "Ramen", servings: 2, duration: 140, veg: true },
  { title: "Soup", servings: 8, duration: 10, veg: true },
];

const NumberBlock = ({ getal }: { getal: number }) => {
  return <p>+ {getal}</p>;
};

type FilterState = "All" | "LessThan40" | "ServesMoreThan3";

export default function Home() {
  const [getRecipes, setRecipes] = useState<Recipe[]>(recipes);
  const [getFilter, setFilter] = useState<FilterState>("All");

  const removeRecipe = (title: string) => {
    // remove recipe
    setRecipes(getRecipes.filter((recipe) => recipe.title !== title));
  };

  return (
    <>
      <h1>Hello Lists!</h1>

      {/* <NavButton title="varken" href="/varken" /> */}

      <button onClick={() => setFilter("All")}>All</button>
      <button onClick={() => setFilter("LessThan40")}>
        Less than 40 minutes
      </button>
      <button onClick={() => setFilter("ServesMoreThan3")}>
        Serves more than 3
      </button>

      {getRecipes
        .filter((recipe) => {
          if (getFilter === "All") {
            return true;
          }
          if (getFilter === "LessThan40") {
            return recipe.duration < 40;
          }
          if (getFilter === "ServesMoreThan3") {
            return recipe.servings > 3;
          }
        })
        .map(({ title, servings, duration }) => {
          return (
            <div className="recipe-box" key={title}>
              <h2>{title}</h2>
              <p>Serves: {servings}</p>
              <p>Duration: {duration}</p>
              <button onClick={() => removeRecipe(title)}>Remove</button>
            </div>
          );
        })}
    </>
  );
}
