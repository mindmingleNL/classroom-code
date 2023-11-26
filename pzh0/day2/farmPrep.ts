type AnimalKind = "cow" | "sheep" | "horse" | "chicken" | "pig" | "goat";

interface Animal {
  kind: AnimalKind;
  id: number;
}

interface FarmBuilding {
  shelters: string[];
}

interface Farm {
  animals: Animal[];
  buildings: FarmBuilding[];
  farmName: string;
}

const myFarm: Farm = {
  animals: [
    { kind: "cow", id: 1 },
    { kind: "sheep", id: 2 },
    { kind: "horse", id: 3 },
    { kind: "chicken", id: 4 },
    { kind: "pig", id: 5 }
  ],
  buildings: [
    { shelters: ["cow", "horse"] },
    { shelters: ["sheep", "pig"] },
    { shelters: ["chicken"] }
  ],
  farmName: "Sunny Acres Farm"
};

// Function to remove an animal from the farm based on id
function removeAnimal(farm: Farm, animalId: number): void {
  farm.animals = farm.animals.filter((animal) => animal.id !== animalId);
}

// Function to add an animal to the farm
function addAnimal(farm: Farm, animal: Animal): void {
  farm.animals.push(animal);
}

const allAnimalKinds: string[] = [
  "cow",
  "sheep",
  "horse",
  "chicken",
  "pig",
  "goat"
];

function checkShelters(farm: Farm): boolean {
  const shelteredAnimals: string[] = [];

  farm.buildings.forEach((building) => {
    building.shelters.forEach((shelter) => {
      // Add the shelter to shelteredAnimals only if it's not already included
      if (!shelteredAnimals.includes(shelter)) {
        shelteredAnimals.push(shelter);
      }
    });
  });

  // Check if each animal kind has a shelter
  return allAnimalKinds.every((kind) => shelteredAnimals.includes(kind));
}

// Example usage:
removeAnimal(myFarm, 3); // Removes the animal with id 3 (horse)
addAnimal(myFarm, { kind: "goat", id: 6 }); // Adds a new animal (goat with id 6) to the farm
const allAnimalsSheltered = checkShelters(myFarm); // Check if every kind of animal has a shelter
