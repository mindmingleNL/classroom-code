// Define the fruit type
export type Fruit = {
  name: string;
  color: string;
  taste: string;
  id: number;
  isAvailable: boolean;
};

// Create an array of fruit objects
export const fruits: Fruit[] = [
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
