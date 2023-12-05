import { useEffect, useState } from "react";
import { z } from "zod";

// interface Animal {
//   id: number;
//   name: string;
//   kind: string;
//   age: number;
//   hasBeenFed: boolean;
//   imgUrl: string;
// }

const animalSchema = z
  .object({
    id: z.number().int().positive(),
    name: z.string().min(1),
    kind: z.string(),
    age: z.number().positive().int(),
    hasBeenFed: z.boolean(),
    imgUrl: z.string().url(),
  })
  .strict();

type Animal = z.infer<typeof animalSchema>;

export default function Home() {
  const [animals, setAnimals] = useState<Animal[]>([]);

  useEffect(() => {
    const getAnimals = async () => {
      const response = await fetch("http://localhost:3001/animals");
      const data = await response.json();
      const animalListSchema = z.array(animalSchema);
      const parsedResult = animalListSchema.safeParse(data);
      if (parsedResult.success) {
        setAnimals(parsedResult.data);
      }
    };

    getAnimals();
  }, []);

  return (
    <>
      <h1>Hello Frontend!</h1>
      {animals.map((animal) => (
        <p key={animal.id}>{animal.name}</p>
      ))}
    </>
  );
}
