/**
 * 👨🏻‍🌾 Let's recap the farm!
 */

type AnimalKind = "cow" | "sheep" | "pig" | "dog" | "monkey";

interface FarmBuilding {
  name: string;
  shelters: AnimalKind[];
}

interface Animal {
  id: number;
  name: string;
  kind: AnimalKind;
  age: number;
}

interface Farm {
  animals: Animal[];
  farmName: string;
}

const theOldFarm: Farm = {
  farmName: "The Old Farm",
  animals: [
    {
      id: 1,
      name: "Fifi",
      age: 2,
      kind: "dog"
    },
    {
      id: 2,
      name: "Bella",
      age: 1,
      kind: "cow"
    },
    {
      id: 3,
      name: "Spots",
      age: 3,
      kind: "cow"
    },
    {
      id: 4,
      name: "Wilberd",
      age: 1,
      kind: "pig"
    },
    {
      id: 5,
      name: "Fluffy",
      age: 4,
      kind: "sheep"
    },
    {
      id: 6,
      name: "Wilberd",
      age: 3,
      kind: "monkey"
    }
  ]
};

/**
 * Our function to remove an animal by id
 * With our new found knowledge we could use .filter() for this
 */
const removeAnimalById = (farm: Farm, idToRemove: number): Farm => {
  // Create an empty array for the filtered animals
  const newAnimals: Animal[] = [];

  // Loop over the current animals
  for (let i = 0; i < farm.animals.length; i++) {
    // Get the current animal in the loop
    const currentAnimal = farm.animals[i];

    // Get the id of that animal
    const currentAnimalId = currentAnimal.id;
    // If this is NOT the animal we want to remove, add it to our newAnimals
    if (idToRemove !== currentAnimalId) {
      newAnimals.push(currentAnimal);
    }
  }

  // Overwrite the animals with our filtered newAnimals array
  farm.animals = newAnimals;
  return farm;
};

const findAnimalByName = (farm: Farm, nameToFind: string): Animal | null => {
  // Loop over the current animals
  for (let i = 0; i < farm.animals.length; i++) {
    // Get the current animal in the loop
    const currentAnimal = farm.animals[i];
    // Return if the currentAnimal name is the one we are searching for
    if (currentAnimal.name === nameToFind) {
      return currentAnimal;
    }
  }

  return null;
};

/**
 * Our function to find an animal by age
 * With our new found knowledge we could use .find() for this
 */
const findAnimalByAge = (farm: Farm, ageToFind: number): Animal | null => {
  // Loop over the current animals
  for (let i = 0; i < farm.animals.length; i++) {
    // Get the current animal in the loop
    const currentAnimal = farm.animals[i];
    // Return if the currentAnimal name is the one we are searching for
    if (currentAnimal.age === ageToFind) {
      return currentAnimal;
    }
  }

  return null;
};

const theOldWay = findAnimalByAge(theOldFarm, 3);

/**
 * Ok, now let's look at three live saving functions
 * that we can use with arrays.
 * THE NEW WAY: .map(), .filter(), and .find() 👇
 */

/**
 * FINDING SOMETHING IN AN ARRAY
 * Documentation for .find() 👇
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 */
const theNewFindWay = theOldFarm.animals.find((animal) => animal.age === 99);

/**
 * FILTERING AN ARRAY
 * Documentation for .filter() 👇
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 */
const theNewFilterWay = theOldFarm.animals.filter((animal) => animal.age === 3);

/**
 * MAPPING OVER ARRAY
 * Documentation for .map() 👇
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
const animalArray = theOldFarm.animals.map((animal) => {
  const animalName = animal.name;
  return animal;
});

/**
 * Some more examples ✨
 */

const myCows = theOldFarm.animals.filter((animal) => {
  return animal.kind === "cow";
});

const greeting = myCows.map((animal) => {
  const cowGreeting = `Hello good morning 🐮 cow ${animal.name}!`;
  return cowGreeting;
});

console.log(greeting);

/**
 * BONUS FARM EXERCISES 👨🏻‍🌾
 */

const greenVegetables = ["🥬", "🥦", "🥒"];
const myFarmPantry = ["🌶️", "🥕", "🥬", "🥦", "🥒", "🍅", "🌽"];

/**
 * Exercise: Retrieve the pepper from the array
 * and put it in a variable called myPepper.
 * Remove the null and write the need code there.
 */
const myPepper = null;

/**
 * Exercise: Create an array called myGreenVegetables
 * and only put the green vegetables from myPantry inside
 * of that array
 */
const myGreenVegetables = null;

/**
 * Exerise: Let's cook all the ingredients! Create an array where the result is the following string for each item "👨🏻‍🍳 I have cooked the 🌽"
 */

const cookedVegetables = null;

/**
 * When you console.log(cookedVegetables) it should output:
 * [
 *   "👨🏻‍🍳 I have cooked 🌶️!",
 *   "👨🏻‍🍳 I have cooked 🥕!",
 *   "👨🏻‍🍳 I have cooked 🥬!",
 *   "👨🏻‍🍳 I have cooked 🥦!",
 *   "👨🏻‍🍳 I have cooked 🥒!",
 *   "👨🏻‍🍳 I have cooked 🍅!",
 *   "👨🏻‍🍳 I have cooked 🌽!"
 * ];
 */
