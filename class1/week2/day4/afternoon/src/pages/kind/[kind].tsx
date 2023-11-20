import NavBar from "@/components/NavBar";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

// ⚔️ Battleplan
// We want to create a page to display a specific kind of animal
// The URL should look like this `/kind/sheep` or `/kind/pig`
// So we can call our filename `[kind].tsx` and put it in a folder called `kind`
// The logic of our page should be to:
// - Get the kind from the url (`/kind/sheep` -> 'sheep')
// - fetch the data in an `useEffect`
//    - Get all the animals from the /farm-animals endpoint
//    - Filter the animals based on the kind from the URL
//    - Put the filtered data in state so we can use it outside of the useEffect

interface Animal {
  age: number;
  farm: number;
  hasBeenFed: boolean;
  id: number;
  imgUrl: string;
  kind: string;
  name: string;
}

const AnimalKindPage = () => {
  // We want to fetch the data from the API
  const [getAnimals, setAnimals] = useState<Animal[]>([]);

  // Create a router
  const router = useRouter();

  // This file should be named '[kind].tsx'
  const kindFromUrl = router.query.kind;

  useEffect(() => {
    if (kindFromUrl === undefined) {
      return; // Stop the execution
    }
    const fetchData = async () => {
      const response = await fetch(
        "https://reader.mindmingle.nl/api/exercises/react/farm-animals"
      );
      const data = await response.json();
      // I only want to keep the items in the data array that are of kind === kindFromUrl
      const dataFiltered = data.filter(
        (animal: Animal) => kindFromUrl === animal.kind
      );
      // Filter here
      setAnimals(dataFiltered);
    };

    fetchData();
  }, [kindFromUrl]);

  return (
    <div>
      <NavBar />
      <h1>Kind</h1>
      <ul>
        {getAnimals.map((animal) => (
          <li key={animal.id}>
            <Link href={`/animals/${animal.id}`}>
              {animal.name} of type {animal.kind}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimalKindPage;
