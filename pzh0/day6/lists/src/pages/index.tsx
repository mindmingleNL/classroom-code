import NavButton from "@/components/NavButton";

const someData = [3, 8, 12, 4, 19, 30, 90, 90];

const recipes = [
  { title: "Spaghetti Carbonara", servings: 4, duration: "30 minutes" },
  { title: "Chicken Curry", servings: 6, duration: "45 minutes" },
  { title: "Beef Stroganoff", servings: 5, duration: "40 minutes" },
];

const NumberBlock = ({ getal }: { getal: number }) => {
  return <p>+ {getal}</p>;
};

export default function Home() {
  return (
    <>
      <h1>Hello Lists!</h1>

      <NavButton title="varken" href="/varken" />

      {recipes
        .sort((first, second) => first.title.length - second.title.length)
        .filter((recipe) => recipe.servings > 4)
        .map((recipe) => {
          return (
            <div key={recipe.title}>
              <h2>{recipe.title}</h2>
              <p>Serves: {recipe.servings}</p>
              <p>Duration: {recipe.duration}</p>
            </div>
          );
        })}
    </>
  );
}
