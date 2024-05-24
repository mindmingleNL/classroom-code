import { useEffect, useState } from "react";

interface ListPlant {
  id: number;
  kind: string;
}

export default function Home() {
  const [plants, setPlants] = useState<ListPlant[]>([]);

  useEffect(() => {
    const getPlants = async () => {
      const response = await fetch("http://localhost:3001/plants");
      const data = await response.json();
      setPlants(data);
    };

    getPlants();
  }, []);

  return (
    <main className="root">
      <h1>Welcome back React!</h1>
      <div className="plants">
        {plants.map((plant) => {
          return (
            <div key={plant.id}>
              <h2>
                {plant.id} - {plant.kind}
              </h2>
              <a href={`/plants/${plant.id}`}>Details</a>
            </div>
          );
        })}
      </div>
    </main>
  );
}
