import NavBar from "@/components/NavBar";
import { useEffect, useState } from "react";

interface Farm {
  id: number;
  open: boolean;
  name: string;
  location: string;
}

const Farms = () => {
  // 2. Put the data in a useState so we can access outside of the useEffect
  const [getFarms, setFarms] = useState<Farm[]>([]);

  // 1. Fetch the Data
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://reader.mindmingle.nl/api/exercises/react/farms"
      );
      const data = await response.json();
      setFarms(data);
    };

    fetchData();
  }, []);

  // 3. Render that data to the page!
  return (
    <div>
      <NavBar />
      <h1>Farms</h1>
      <ul>
        {getFarms.map((farm) => (
          <li key={farm.id}>{farm.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Farms;
