/**
 * 👨🏻‍🌾 Let's recap the farm
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
  feelings: {
    happy: boolean;
  };
}

interface Farm {
  animals: Animal[];
  farmName: string;
}

const theOldFarm: Farm = {
  farmName: "Beats and Beets",
  animals: [
    {
      id: 1,
      name: "Fifi",
      age: 2,
      kind: "dog",
      feelings: {
        happy: true
      }
    },
    {
      id: 2,
      name: "Bella",
      age: 1,
      kind: "cow",
      feelings: {
        happy: true
      }
    },
    {
      id: 3,
      name: "Spots",
      age: 3,
      kind: "cow",
      feelings: {
        happy: true
      }
    },
    {
      id: 4,
      name: "Wilberd",
      age: 1,
      kind: "pig",
      feelings: {
        happy: true
      }
    },
    {
      id: 5,
      name: "Fluffy",
      age: 4,
      kind: "sheep",
      feelings: {
        happy: true
      }
    },
    {
      id: 6,
      name: "Wilberd",
      age: 3,
      kind: "monkey",
      feelings: {
        happy: true
      }
    }
  ]
};

// A function to checkHappiness
// that returns a boolean indicating if all the animals are happy
// 1. We want to check if all the animals are happy
// - We need some kind of thing to keep track of that
const checkHappinessOfAnimals = () => {
  const farmAnimals = theOldFarm.animals;
  let allAnimalsAreHappy = true;
  for (let i = 0; i < farmAnimals.length; i++) {
    const currentAnimal = farmAnimals[i];
    // If we encounter an animal that is
    // not happy, we change our tracking variable to false.
    if (currentAnimal.feelings.happy === false) {
      allAnimalsAreHappy = false;
    }
  }
  console.log(`All animals are happy: ${allAnimalsAreHappy}`);
};

checkHappinessOfAnimals();

// Built in Array methods
// .forEach method
const array1 = ["a", "b", "c"];
const newArray: string[] = [];
array1.forEach((letter) => {
  console.log(letter);
  newArray.push(`Our letter: ${letter}`);
});

// .filter()
const array2 = ["a", "b", "b", "c"];
// We want to check if our letter is equal to "b"
const bArray = array2.filter((letter) => letter === "b");
// We call this '===' comparison operator
console.log(bArray);

// .map()
const array3 = ["a", "b", "b", "c"];
const newArray3 = array3.map((letter) => {
  return letter.toUpperCase();
});
console.log(newArray3);

// .find()
const array4 = ["a", "b", "b", "c"];
const itemFound = array4.find((letter) => letter === "z");
console.log(itemFound);
