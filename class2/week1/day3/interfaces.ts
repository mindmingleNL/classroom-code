interface Pest {
  name: string;
  areaOfEffect: string;
}

interface Plant {
  kind: string;
  numberOfLeaves: number;
  pests: Pest[];
  alive: boolean;
  place: "indoor" | "outdoor";
  length: number;
  color: string;
}

const plant: Plant = {
  place: "indoor",
};

interface Car {
  make: string;
  horsepower: number;
  zeroToSixty: number;
  color: "black" | "red";
}

const car: Car = {
  make: "Mustang",
  horsepower: 430,
  zeroToSixty: 4.5,
  color: "black",
};
