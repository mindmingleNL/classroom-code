function isThereIceCream(hour) {
  if (hour > 13 && hour < 16) {
    return "YES!";
  } else {
    return "No :(";
  }
}

const isThereIceCream2 = (hour) => {
  if (hour > 13 && hour < 16) {
    return "YES!";
  } else {
    return "No :(";
  }
};

const sayHi = (name, age) => "Hi " + name + ", you are " + age + " years old";

const sayHiBetter = (name, age) =>
  `Hi ${name.toUpperCase()}, you are ${age} years old!`;

// console.log(isThereIceCream(12));
// console.log(isThereIceCream2(12));

// console.log(cow);

// console.log(sayHiBetter("Swen", 30));

// const sayHello = (name) => {
//   return "Hello " + name;
// };

// console.log(sayHello("Swen"));

const person = {
  pName: "Bob",
  occupation: "Builder",
  hasADog: true
};

const { pName, occupation, hasADog } = person;
// THIS IS THE SAME AS:
// const pName = person.pName;
// const occupation = person.occupation

// console.log(person.hasADog);

// console.log(pName);
// console.log(occupation);
// console.log(hasADog);

function calculateTotalPrice(options) {
  const { price, quantity, taxRate, discount } = options;
  const subtotal = price * quantity;
  const taxAmount = subtotal * (taxRate / 100);
  const discountAmount = subtotal * (discount / 100);
  const total = subtotal + taxAmount - discountAmount + shippingCost;
  return total;
}

const productOptions = {
  price: 50,
  quantity: 15,
  discount: 20,
  shippingCost: 30
};

calculateTotalPrice(productOptions);
// calculateTotalPrice({
//   price: 50,
//   quantity: 10,
//   discount: 20,
//   shippingCost: 30
// });

// calculateTotalPrice(50, 10, 20, 30);
