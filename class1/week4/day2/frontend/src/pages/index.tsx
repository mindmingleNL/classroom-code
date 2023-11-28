import { useEffect, useState } from "react";

interface People {
  name: string;
  age: number;
}

export default function Home() {
  const [people, setPeople] = useState<People[]>([]);

  useEffect(() => {
    const getPeople = async () => {
      const peopleResponse = await fetch("http://127.0.0.1:3001/");
      const peopleData = await peopleResponse.json();
      setPeople(peopleData);
    };
    getPeople();
  }, []);

  return (
    <div>
      <h1>Hello Frontend!</h1>
      {people.map((person, index) => (
        <p key={index}>{person.name}</p>
      ))}
    </div>
  );
}
