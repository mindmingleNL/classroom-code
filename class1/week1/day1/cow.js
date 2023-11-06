// function double(x) {
//   return x * 2;
// }

// function doubleBig(y) {
//   if (y > 10) {
//     return y * 2;
//   } else {
//     return y;
//   }
// }

// const doubleBigArrow = (y) => {
//   if (y > 10) {
//     return y * 2;
//   } else {
//     return y;
//   }
// };

// const chicken = (x) => x * 2;

// console.log(doubleArrow(7));

// const ageOfUser = 25;
// let canRentACar = false;
// let userSex = "female";

// if (ageOfUser > 21) {
//   canRentACar = true;
// }

// if (canRentACar) {
//   // console.log(
//   //   "User can rent a car! Their age is:" +
//   //     ageOfUser +
//   //     " and their gender is " +
//   //     userSex
//   // );
//   console.log(
//     `User can rent a car! Their age is: ${ageOfUser} and their gender is ${userSex.toUpperCase()}`
//   );

//   console.log("Hello, world!");
//   console.log("Hello, world!");
//   console.log(`Hello, world! ${ageOfUser} ${7 + 10}`);
// } else {
//   console.log("User is not old enough to rent a car!");
// }

// const superMarket = {
//   name: "Jumbo",
//   street: "Shopping street",
//   houseNo: 12,
//   dairyProducts: [
//     { name: "Milk", price: 1.5 },
//     { name: "Yoghurt", price: 4.5 },
//   ],
// };
// const { name, street, houseNo, dairyProducts } = superMarket;

// console.log(name);
// console.log(street);
// console.log(houseNo);
// console.log(dairyProducts);

// console.log(superMarket);

// console.log(superMarket.houseNo);

// console.log(superMarket.dairyProducts.length);

function register(name, age, city, phone, gender, pets, married) {
  // a bunch of stuff
  return "Succes!";
}

function register2(userInfo) {
  const { name, age, city, phone, gender, pets, married } = userInfo;
  if (name.length === 0) {
    return "ERROR IN NAME";
  }

  if (age < 18) {
    return "USER TOO YOUNG";
  }

  if (city === "Utrecht") {
    return "AWESOME CITY";
  }
}

register("Swen", 30, "Utrecht", "0627", "M", true, true);

register2({
  name: "Swen",
  age: 30,
  city: "Utrecht",
  phone: "0627",
  gender: "M",
  pets: true,
  married: true,
});
