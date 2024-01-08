import { Animal } from "@/types/animals";
import Link from "next/link";
import { useEffect, useState } from "react";

const AnimalsPage = () => {
  const [count, setCount] = useState(1);
  //   let animalData
  const [animals, setAnimals] = useState<null | Animal[]>(null);

  useEffect(() => {
    const getAnimalsFromApi = async () => {
      const animalResponse = await fetch(
        "https://reader.mindmingle.nl/api/exercises/react/animals"
      );
      const animalData = await animalResponse.json();
      setAnimals(animalData);
    };

    getAnimalsFromApi();
  }, []); // Dependency Array
  // Een lege dependency Array runt alleen als je de pagina laadt

  //   useEffect(() => {
  //     console.log("useEffect2");
  //   }, []);

  // Cleanup in een useEffect - Niet nodig, maar goed om te weten
  //   useEffect(() => {
  //     const intervalId = setInterval(() => console.log("1 seconde"), 1000);
  //     console.log("intervalID :" + intervalId);

  //     return () => {
  //       clearInterval(intervalId);
  //     };
  //   }, []);

  console.log(animals);

  return (
    <div>
      <h1>Animal Page</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase the Count</button>
      <ul>
        {animals === null ? (
          <div>Farm Burned Down </div>
        ) : (
          animals.map((animal) => (
            <li key={animal.id}>
              <Link href={`/animals/${animal.id}`}>{animal.name}</Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default AnimalsPage;
