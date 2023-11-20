import { useEffect, useState } from "react";

interface CounterProps {
  name: string;
}

interface Animal {
  id: number;
  name: string;
  kind: string;
  age: number;
  hasBeenFed: boolean;
  imgUrl: string;
}

const Counter = ({ name }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [animals, setAnimals] = useState<Animal[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      // Do the API Call
      const response = await fetch(
        "https://reader.mindmingle.nl/api/exercises/react/animals"
      );
      const data = await response.json();
      // Put that data from the API into the state of our component so we can use it
      setAnimals(data);
    };

    fetchData();
  }, []);
  // 👆 Dependency Array -> It controls when our useEffect will run
  // In our case it will only run once

  return (
    <div>
      <h1>Hi {name}, ready to count?</h1>
      <h2>Count: {count}</h2>
      <h2>Count: {count}</h2>
      <h2>Count: {count}</h2>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <ul>
        {animals.map((animal) => (
          <li key={animal.id}>{animal.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Counter;
