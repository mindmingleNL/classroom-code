import NavBar from "@/components/NavBar";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Animal {
  age: number;
  farm: number;
  hasBeenFed: boolean;
  id: number;
  imgUrl: string;
  kind: string;
  name: string;
}

const Animals = () => {
  // We want to fetch the data from the API
  const [getAnimals, setAnimals] = useState<Animal[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://reader.mindmingle.nl/api/exercises/react/farm-animals"
      );
      const data = await response.json();
      setAnimals(data);
    };

    fetchData();
  }, []);

  const animalTypes: string[] = [];
  getAnimals.forEach((animal) => {
    // If animaltypes contains our current animal type, we push it to the array
    const currentAnimalKind = animal.kind;
    if (animalTypes.includes(currentAnimalKind)) {
      return;
    } else {
      animalTypes.push(animal.kind);
    }
  });

  return (
    <div>
      <NavBar />
      <h1>Animals</h1>
      <h2>Animal Types</h2>
      <ul>
        {animalTypes.map((type) => (
          <li key={type}>
            <Link href={`/kind/${type}`}>{type}</Link>
          </li>
        ))}
      </ul>

      <h2>All Animals</h2>
      <ul>
        {getAnimals.map((animal) => (
          <li key={animal.id}>
            <Link href={`/animals/${animal.id}`}>{animal.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Animals;
