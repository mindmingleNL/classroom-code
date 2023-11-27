type AnimalKind = "cow" | "sheep" | "horse" | "chicken" | "pig" | "goat";

interface Animal {
  kind: AnimalKind;
  id: number;
}

interface FarmBuilding {
  shelters: AnimalKind[];
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

// Function to remove an animal from a farm based on an id
const removeAnimal = (farm: Farm, idToRemove: number): Farm => {
  // Maak een volledige kopie van de farm
  const newFarm = structuredClone(farm);

  // We hebben een id van een dier, die willen we verwijderen
  // De dieren array zit op farm.animals
  const newAnimals = newFarm.animals.filter(
    (currentAnimal) => currentAnimal.id !== idToRemove
  );

  //   newFarm.animals.forEach((currentAnimal) => {
  //     if (currentAnimal.id !== idToRemove) {
  //       newAnimals.push(currentAnimal);
  //     }
  //   });

  //   for (let i = 0; i < newFarm.animals.length; i++) {
  //     const currentAnimal = newFarm.animals[i];
  //     // De check, is het currentAnimal id gelijk aan idToRemove
  //     if (currentAnimal.id !== idToRemove) {
  //       newAnimals.push(currentAnimal);
  //     }
  //   }

  newFarm.animals = newAnimals;

  return newFarm;
};

const farm2 = removeAnimal(myFarm, 1);
const farm3 = removeAnimal(farm2, 2);
