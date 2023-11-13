interface Animal {
  id: number;
  name: string;
  kind: string;
  age: number;
  hasBeenFed: boolean;
  imgUrl: string;
}

const getAnimals = async () => {
  const response = await fetch(
    "https://reader.mindmingle.nl/api/exercises/react/animals"
  );
  const data: Animal[] = await response.json();
  data.forEach((animal) => console.log(animal.hasBeenFed));
};

const getOne = async () => {
  const response = await fetch("http://127.0.0.1:3001/one");
  const data = await response.text();
  console.log(data);
};

const getPizzas = async () => {
  const response = await fetch("http://127.0.0.1:3001/pizzas");
  const data = await response.json();
  console.log(data);
};

const getPineapplePizzas = async () => {
  const response = await fetch("http://127.0.0.1:3001/pizzas/pineapple");
  const data = await response.json();
  console.log(data);
};

const getVeggieLowCaloricPizzas = async () => {
  const response = await fetch(
    "http://127.0.0.1:3001/pizzas/low-calories-vegetarian-2"
  );
  const data = await response.json();
  console.log(data);
};

getVeggieLowCaloricPizzas();
