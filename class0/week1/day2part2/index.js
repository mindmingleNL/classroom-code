"use strict";
// interface AreaType {
//   requiredUnits: number;
//   potentialUnits: number;
//   sunHours: number;
//   area: number;
// }
// const ourArea = {
//   requiredUnits: 10,
//   potentialUnits: 10,
//   sunHours: 12,
//   area: 15
// };
// function calculateArea(areaInformation: AreaType) {
//   const { requiredUnits, potentialUnits, sunHours, area } = areaInformation;
//   const result = (requiredUnits / (potentialUnits * sunHours)) * area;
//   if (result > 1) {
//     return "Needed area: " + result + " m²";
//   } else {
//     return null;
//   }
// }
// const result = calculateArea(ourArea);
// console.log(result);
// UNION TYPES
// interface Dog {
//   legs: number;
//   age: number;
// }
// interface Giraffe {
//   legs: number;
//   age: number;
// }
// let example: string | number | null | string[];
// example = "Hello World!";
// example = 10;
// example = null;
// example = ["null", "jasjd"];
// Literal Types
// const myName = "Aiden";
// let yourName = "Jose";
// interface Animal {
//   legs: number;
//   age: number;
//   typeOfAnimal: "giraffe" | "dog";
// }
// const myPet: Animal = {
//   typeOfAnimal: "dog",
//   age: 21,
//   legs: 3
// };
// Only print RED BLUE or GREEN
// function printColor(color: "red" | "blue" | "green") {
function printColor(color) {
    console.log("The color is: " + color);
}
printColor("green");
