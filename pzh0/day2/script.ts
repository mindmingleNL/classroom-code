//////////////
// Working with objects

// Interface maken

type Materiaal = "metaal" | "rubber" | "plastic";

interface Tanker {
  volume: number;
  liters: number;
  materiaal: Materiaal;
  diesel: boolean;
  gewicht: number;
  bemanning: number;
}

const checkVergunningVoorTanker = (tanker: Tanker) => {
  const { volume, liters, materiaal, diesel, gewicht, bemanning } = tanker;
  if (diesel) {
    return true;
  } else {
    return false;
  }
};

const resultVergunning = checkVergunningVoorTanker({
  volume: 100,
  liters: 12,
  materiaal: "metaal",
  diesel: true,
  gewicht: 12,
  bemanning: 80
});

// console.log(resultVergunning);

//////////////
// Inference

const obj = { width: 10, height: 15 };
const area = obj.width * obj.height;
console.log(area);

// Node Package Manager

//////////////
// Optional Properties

interface Blog {
  publicaties: number[];
}

interface User {
  name: string;
  id: number;
  birthday?: string;
  profilePicture: null | string;
}

const user1: User = {
  name: "John",
  id: 0,
  profilePicture: null
};

const user2: User = {
  name: "John",
  id: 0,
  birthday: "12/01/1994",
  profilePicture: "https:jasd.com/jdajsd.jpg"
};

//////////////
// Basics
// Number types
// String types
// Booleans types
// 'special' types

//////////////
// Typing an Array
const numberArray: User[] = [user1, user2];

//////////////
// Union Types
type PetNames = "Peluso" | "Gijs" | "Snorre";
const pet: PetNames = "Peluso";

//////////////
// More Complex Interfaces
