// Define the fruit type
export type Fruit = {
  name: string;
  color: string;
  taste: string;
  id: number;
  isAvailable: boolean;
};

// Create an array of fruit objects
export const fruits = [
  { name: "Apple", color: "Red", taste: "Sweet", id: 1, isAvailable: true },
  { name: "Banana", color: "Yellow", taste: "Sweet", id: 2, isAvailable: true },
  {
    name: "Orange",
    color: "Orange",
    taste: "Citrusy",
    id: 3,
    isAvailable: false,
  },
  { name: "Grapes", color: "Purple", taste: "Sweet", id: 4, isAvailable: true },
  {
    name: "Strawberry",
    color: "Red",
    taste: "Sweet",
    id: 5,
    isAvailable: true,
  },
  {
    name: "Pineapple",
    color: "Yellow",
    taste: "Tangy",
    id: 6,
    isAvailable: false,
  },
  {
    name: "Watermelon",
    color: "Green",
    taste: "Sweet",
    id: 7,
    isAvailable: true,
  },
  { name: "Mango", color: "Orange", taste: "Sweet", id: 8, isAvailable: true },
  { name: "Kiwi", color: "Brown", taste: "Tart", id: 9, isAvailable: false },
  {
    name: "Blueberry",
    color: "Blue",
    taste: "Sweet",
    id: 10,
    isAvailable: true,
  },
  {
    name: "Grapefruit",
    color: "Orange",
    taste: "Bitter",
    id: 11,
    isAvailable: true,
  },
];

// const newFruits = fruits.map((fruit) => {
//   if (fruit.id === 3) {
//     const newFruit = { ...fruit, isAvailable: true };
//     return newFruit;
//   } else {
//     return fruit;
//   }
// });
// console.log("HERE IS NEW ==================");
// console.log(newFruits);
// console.log("HERE IS OLD ==================");
// console.log(fruits);

// const x = 5;
// x = 7;

// const stuff = ["Broom", "Towel", "Vacuum"];
// const newStuff = ["Cup", ...stuff, "Chair", [...stuff]];

// console.log(newStuff);

// const person = { name: "Albert", occupation: "Scientist", happy: true };
// const person2 = { ...person, salary: 5000 };
// console.log(person2);
// const y = ...stuff;

// const anObj = { aName: "Betsy", kind: "chicken", age: 12 };
// const aNewObj = { ...anObj, age: 42, kind: "cow" };

// console.log(aNewObj);
