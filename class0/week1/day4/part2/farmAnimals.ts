interface FarmAnimal {
  id: number;
  name: string;
  age: number;
}

const farmAnimals = [
  { id: 1, name: "Bessie", kind: "cow", age: 4, hasBeenFed: false },
  { id: 2, name: "Dolly", kind: "sheep", age: 2, hasBeenFed: true },
  { id: 3, name: "Wilberd", kind: "dog", age: 4, hasBeenFed: false }
];

const stringJson = JSON.stringify(farmAnimals);

const parsedObj = JSON.parse(stringJson);

console.log(parsedObj[0]);
