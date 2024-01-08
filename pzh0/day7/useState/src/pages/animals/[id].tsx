import { Animal } from "@/types/animals";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const IDPage = () => {
  // Je wil de parameter uit de URL halen
  const router = useRouter();
  const { id } = router.query;

  const [animal, setAnimal] = useState<null | Animal>(null);

  useEffect(() => {
    const getAnimalsFromApi = async () => {
      if (id === undefined) {
        return;
      }

      // Haal het specifieke dier op met de id
      const animalResponse = await fetch(
        `https://reader.mindmingle.nl/api/exercises/react/animals/${id}`
      );
      const animalData = await animalResponse.json();
      setAnimal(animalData);
    };

    getAnimalsFromApi();
  }, [id]);

  // https://reader.mindmingle.nl/api/exercises/react/farm-animals/3

  const deleteAnimal = () => {
    // Functie schrijven om de API te callen, en het dier in de database te verwijderen
  };

  if (animal === null) {
    return (
      <div>
        <p>Dier aan het laden... of dier is dood,,.</p>
      </div>
    );
  } else {
    return (
      <div>
        <Link href="/animals">Animals</Link>
        <h1>Animal met naam: {animal.name}</h1>
        <button onClick={() => deleteAnimal()}>
          Dier gaat naar de dierenvakantieboerderij (slachterij)
        </button>
      </div>
    );
  }
};

export default IDPage;
