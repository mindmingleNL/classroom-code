import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface DetailPlant {
  id: number;
  kind: string;
  age: number;
  owner: {
    id: number;
    username: string;
  };
}

const PlantDetail = () => {
  const router = useRouter();
  const [plant, setPlant] = useState<DetailPlant | null>(null);

  useEffect(() => {
    const getPlants = async () => {
      const response = await fetch(
        `http://localhost:3001/plants/${router.query.id}`
      );
      const data = await response.json();
      setPlant(data);
    };
    if (router.query.id) {
      getPlants();
    }
  }, [router]);

  if (plant === null) {
    return <p>Loading...</p>;
  }
  return (
    <main className="root">
      <h1>Plant detail</h1>
      <h2>{plant.kind}</h2>
      <p>
        It is {plant.age} years old and it belongs to {plant.owner.username}
      </p>
    </main>
  );
};
export default PlantDetail;
