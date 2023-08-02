import { Inter } from "next/font/google";
import NavigationBar from "@/components/NavigationBar";
import HeroHomepage from "@/components/HeroHomepage";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const recipes = [
  { name: "Breakfast Burritos" },
  { name: "Overnight Oats" },
  { name: "Avocado Toast" },
  { name: "Shakshouka" },
  { name: "American Pancakes" }
];

export default function Home() {
  return (
    <>
      {/* <NavigationBar roundedCorners={false} /> */}
      <nav className="homepage-navigation-bar">
        <span>🥘 HomeChefRecipes</span>
        <div>
          <a href="/">Home</a>
          <a href="/login">Login</a>
        </div>
      </nav>
      <HeroHomepage />
      <div className="homepage-container">
        <h2 className="homepage-heading-recipes">Recipes</h2>
        <div className="homepage-search-bar">Search for Recipes</div>
        <ul className="homepage-categories-filter">
          <li>All</li>
          <li>Breakfast</li>
          <li>Lunch</li>
          <li>Dinner</li>
          <li>Dessert</li>
        </ul>
        <div className="homepage-recipes">
          {recipes.map((recipe) => {
            return (
              <div className="homepage-recipe-item">
                <h3>{recipe.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
      <div className="add-new-recipe-button">
        <Link href="/new-recipe">Add New Recipe</Link>
      </div>
    </>
  );
}
