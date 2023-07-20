import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { Animal } from "@/components/Farm";
const AnimalProfile = () => {
  // Create a memory to store the animal info, it starts as null in the beginning of time
  const [getAnimal, setAnimal] = useState<null | Animal>(null);
  // Get the router
  const router = useRouter();
  // From the router get the part of the URL we want (inside of query)
  const animalIdFromUrl = router.query.animalId;
  useEffect(() => {
    // Check if the value from the router.query already exists
    if (animalIdFromUrl === undefined) {
      // if not stop (empty return)
      return;
    }
    // Create a function that uses axios (and thus is async)
    const getAnimalFromApi = async () => {
      const response = await axios.get(
        `https://reader.mindmingle.nl/api/exercises/react/animals/${animalIdFromUrl}`
      );
      // Store the data of the response inside our memory (from line 7)
      setAnimal(response.data);
    };
    // CALL the function
    getAnimalFromApi();
  }, [animalIdFromUrl]); // Look at 'animalIdFromUrl' and if it changes run again

  // Here we are waiting for the request to complete
  if (getAnimal === null) {
    return <p>Loading...</p>;
  }
  // Here we finally can use the data!
  return (
    <div>
      <h1>Hello welcome to {getAnimal.name} page</h1>
      <p>I am {getAnimal.age} years old</p>
      <img src={getAnimal.imgUrl} alt="profile picture" />
    </div>
  );
};

export default AnimalProfile;
