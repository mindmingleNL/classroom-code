"use strict";
// Recap map/filter/find
// the 'tsx' command
// Spreading
const pokemons = [
    {
        name: "Charmander",
        id: 1,
        type: ["fire"],
        happy: false,
    },
    {
        name: "Squirtle",
        id: 2,
        type: ["water"],
        happy: true,
    },
    {
        name: "Bulbasaur",
        id: 3,
        type: ["grass"],
        happy: false,
    },
    {
        name: "Staryu",
        id: 4,
        type: ["water"],
        happy: true,
    },
];
// const happyPokemon = [];
// for (let i = 0; i < pokemons.length; i++) {
//   const currentPokemon = pokemons[i];
//   //   if (currentPokemon.happy === false) {
//   if (isPokemonUnhappy(currentPokemon)) {
//     console.log(`${currentPokemon.name} is happy`);
//     happyPokemon.push(currentPokemon);
//   }
// }
// console.log(happyPokemon);
const isPokemonUnhappy = (p) => {
    if (p.happy === false) {
        return true;
    }
    else {
        return false;
    }
};
const isPokemonHappy = (p) => {
    if (p.happy === true) {
        return true;
    }
    else {
        return false;
    }
};
const isNeverTrue = (p) => {
    return false;
};
const unhappyPokemon = pokemons.filter(isPokemonUnhappy);
const happyPokemon = pokemons.filter(isPokemonHappy);
const result = pokemons.filter(isPokemonHappy);
if (result.length === 0) {
    console.log("There are no happy pokemon");
}
else {
    console.log("Here are the happy pokemon");
    console.log(result);
}
// console.log(result);
const someNumbs = [10, 304, 12, 18, 29, 88];
// const double = (x: number): number | undefined => {
//   if (x > 50) {
//     return x * 2;
//   }
// };
// const result2 = someNumbs.map(double);
// console.log(result2);
const createPokemonMood = (p) => {
    if (p.happy === true) {
        return `${p.name} 😁`;
    }
    else {
        return `${p.name} 😭`;
    }
};
const result3 = pokemons.map(createPokemonMood);
console.log(result3);
