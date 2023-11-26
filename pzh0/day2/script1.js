// // Insecure JavaScript Code Examples

// // Function to double the value
// function double(x) {
//   return x * 2;
// }

// // Using functions without type checks can lead to unexpected behavior
// console.log(double("4")); // This will concatenate '4' to itself resulting in the string "44" instead of 8

// // Function to multiply two values
// function multiply(z, u) {
//   return z * u;
// }

// console.log(multiply("6", "3")); // This will concatenate '6' and '3' resulting in "63", not 18 as expected

// // Object destructuring without type safety
// const checkVergunningVoorTanker = (tanker) => {
//   const { volume, liters, materiaal, diesel, gewicht, bemanning } = tanker;
//   if (liters < 50) {
//     return true;
//   } else {
//     return false;
//   }
// };

// // Passing an object with incorrect property types
// const resultVergunning = checkVergunningVoorTanker({
//   volume: 100,
//   liters: "12", // This should be a number, but the function will accept it as a string mistakenly
//   materiaal: 65,
//   diesel: true,
//   gewicht: 12,
//   bemanning: 80
// });
// console.log(resultVergunning); // May produce unexpected behavior if not handled properly

// // Using spread syntax incorrectly because of absence of type checks
// const a = [1, 2, 3];
// const copy_a = [...a, "4"]; // This mixes numbers and a string
// console.log(copy_a); // Expected [1, 2, 3, 4], gets [1, 2, 3, "4"]
