import NavBar from "@/components/NavBar";
import Link from "next/link";
import { useRouter } from "next/router";
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
  // To do that we need the get the id from the router

  // Create a router
  const router = useRouter();

  // This file should be named '[id].tsx'
  const idFromUrl = router.query.id;
  console.log(idFromUrl);

  const [getAnimal, setAnimal] = useState<Animal | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (idFromUrl === undefined) {
        return; // Stop execution here
      }

      const response = await fetch(
        `https://reader.mindmingle.nl/api/exercises/react/farm-animals/${idFromUrl}`
      );
      const data = await response.json();
      setAnimal(data);
    };

    fetchData();
  }, [idFromUrl]);

  // Conditions
  // Always use triple === or !== check
  console.log(true === true); // true
  console.log(true !== true); // false

  return (
    <div>
      <NavBar />
      <h1>Animal Page</h1>
      {/* 
        We want to check if the animal is not null
        If it is NOT null, we display some info
       */}

      {getAnimal !== null ? (
        <div>{getAnimal.name}</div>
      ) : (
        <div>Loading, or not found...</div>
      )}
    </div>
  );
};

export default Animals;
