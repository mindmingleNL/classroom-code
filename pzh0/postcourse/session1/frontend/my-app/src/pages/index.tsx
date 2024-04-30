import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [allThePets, setAllThePets] = useState<any[]>([]);

  useEffect(() => {
    const getAllPets = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pets`);
      const data = await response.json();
      setAllThePets(data);
    };
    getAllPets();
  }, []);

  return (
    <main className={`${inter.className}`}>
      <h1>Hello frontend</h1>
      {allThePets.map((pet) => {
        return <p key={pet.name}>{pet.name}</p>;
      })}
    </main>
  );
}
