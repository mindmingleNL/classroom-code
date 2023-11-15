import { fruits } from "@/data/fruits";

export default function Home() {
  const sayHi = (name: string) => {
    console.log(`hi ${name}!`);
  };

  return (
    <div>
      <h1>Welcome to Fruits.com</h1>
      <div className="fruit-list">
        {fruits.map((fruit) => {
          return (
            <div key={fruit.id}>
              <a href={`/${fruit.name}`}>{fruit.name}</a>
              <button onClick={() => sayHi(fruit.name)}>
                Say hi to this fruit
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
