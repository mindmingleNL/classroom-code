// ✅ 1. Create an interface for the Cat
// ✅ 2. Create an array with cats older than 4
//    - We want to use filter to get all the cats with age > 2
// 3. Create an array of observant cats

// UNION TYPE
type color = "Tabby" | "Seal Point" | "Blue" | "White";

interface Cat {
  name: string;
  age: number;
  breed: string[];
  color: color;
  favoriteToy: string;
  personalityTraits: string[];
}

const catArray: Cat[] = [
  {
    name: "Peluso",
    color: "Blue",
    breed: ["Beautiful Cat"],
    age: 4,
    favoriteToy: "Lasso",
    personalityTraits: ["Lazy", "A kind spirit"]
  },
  {
    name: "Whiskers",
    age: 5,
    breed: ["Maine Coon"],
    color: "Tabby",
    favoriteToy: "Feather wand",
    personalityTraits: ["Playful", "Observant", "Curious"]
  },
  {
    name: "Luna",
    age: 3,
    breed: ["Siamese"],
    color: "Seal Point",
    favoriteToy: "Catnip mouse",
    personalityTraits: ["Playful", "Talkative", "Assertive"]
  },
  {
    name: "Oliver",
    age: 2,
    breed: ["British Shorthair"],
    color: "Blue",
    favoriteToy: "String ball",
    personalityTraits: ["Playful", "Observant", "Gentle"]
  },
  {
    name: "Mittens",
    age: 4,
    breed: ["Persian"],
    color: "White",
    favoriteToy: "Squeaky mouse",
    personalityTraits: ["Calm", "Pampered", "Graceful"]
  }
];

/**
 *
 */

const olderCats = catArray.filter((cat) => cat.age > 4);

const stupid = catArray.filter((cat) => true);

const observantCats = catArray.filter((cat) => {
  // We want the personalityTraits
  const personalityTraits = cat.personalityTraits;
  // personalityTraits === ["Lazy", "A kind spirit"]

  // We want to check if personalityTraits includes "Observant"
  //   const findTrait = personalityTraits.find((trait) => trait === "Observant");

  //   if (findTrait !== undefined) {
  //     return true
  //   } else {
  //     return false
  //   }

  const isCatObservant = personalityTraits.includes("Observant");
  return isCatObservant;
});

const observantCatBreeds = observantCats.map((cat) => {
  return cat.breed.map((breed) => breed);
});
