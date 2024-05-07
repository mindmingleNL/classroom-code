const double = (num: number): number => {
  return num * 2;
};

const reverseName = (name: string): string => {
  return name.split("").reverse().join();
};

interface Animal {
  kind: string;
}

const animals: Animal[] = [];

const addAnimal = (animal: Animal): Animal[] => {
  animals.push(animal);
  return animals;
};

const eight = double(4);
const reversed = reverseName("Pipo");

// good
addAnimal({ kind: "pig" });

// wrong
addAnimal({ name: "something" });

const fiveAsNumber = 5;
const fiveAsString: string = "5";

type Seat = string | undefined;

const seats: Seat[] = [
  undefined,
  "Mark",
  "Brandon",
  undefined,
  "Sneha",
  "Trang",
  undefined,
  "Nargiz",
  undefined,
  undefined,
];

const convertToNumber = (input: string | number): number => {
  if (typeof input === "string") {
    return Number(input);
  } else {
    return input;
  }
};

const resultA = convertToNumber(fiveAsNumber);
const resultB = convertToNumber(fiveAsString);
