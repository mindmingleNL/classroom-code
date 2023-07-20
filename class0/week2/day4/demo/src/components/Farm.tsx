import { useEffect, useState } from "react";
import axios from "axios";

// {
//     "id": 1,
//     "name": "Bessie",
//     "kind": "cow",
//     "age": 4,
//     "hasBeenFed": false,
//     "imgUrl": "https://i.giphy.com/media/h55EUEsTG9224/giphy.webp"
//   },

export interface Animal {
  id: number;
  name: string;
  kind: "cow" | "chicken" | "sheep" | "pig";
  age: number;
  hasBeenFed: boolean;
  imgUrl: string;
}

const Farm = () => {
  //   let animals = [];
  const [getAnimals, setAnimals] = useState<Animal[] | null>(null);

  useEffect(() => {
    // Define async function for axios
    const getAnimals = async () => {
      const response = await axios.get(
        "https://reader.mindmingle.nl/api/exercises/react/animals"
      );
      //   console.log(response.data);
      // animals = response.data
      setAnimals(response.data);
    };
    // Call the function
    getAnimals();
    console.log("I was born!");
  }, []);

  //   if (getAnimals === null) {
  //     return (
  //       <div>
  //         <h1>Hello from farm</h1>
  //         <p>Loading...</p>
  //       </div>
  //     );
  //   }

  return (
    <div>
      <h1>Hello from farm</h1>
      {getAnimals === null ? (
        <p>Loading...</p>
      ) : (
        getAnimals.map((animal) => {
          return (
            <div key={animal.id}>
              <p>
                {animal.id}:{animal.name}
              </p>
              <a href={`/animals/${animal.id}`}>Show Details</a>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Farm;
