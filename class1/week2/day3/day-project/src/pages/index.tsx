import { fruits, Fruit } from "@/data/fruits";
import { useState } from "react";

export default function Home() {
  const [getFruits, setFruits] = useState<Fruit[]>(fruits);

  const sayHi = (name: string) => {
    console.log(`hi ${name}!`);
  };

  const makeAvailable = (id: number) => {
    const newFruits = getFruits.map((fruit) => {
      if (fruit.id === id) {
        const newFruit = { ...fruit, isAvailable: true };
        return newFruit;
      } else {
        return fruit;
      }
    });
    setFruits(newFruits);
  };

  return (
    <div>
      <h1>Welcome to Fruits.com</h1>
      <div className="fruit-list">
        {getFruits.map((fruit) => {
          return (
            <div key={fruit.id}>
              <a href={`/${fruit.name}`}>{fruit.name}</a>
              <p>{fruit.isAvailable ? "✅" : "❌"}</p>
              <button onClick={() => makeAvailable(fruit.id)}>
                Say hi to this fruit
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
