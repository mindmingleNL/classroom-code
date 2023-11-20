// Arrow functions

function double(x) {
  return x * 2;
}

const doubleArrow = (x) => {
  return x * 2;
};

const doubleArrowShort = (x) => x * 2;

// constole.log(doubleArrow(8));

function multiply(z, u) {
  return z * u;
}

// console.log(multiply);
// const blabla = multiply;

// console.log(blabla(9, 3));
// console.log(multiply(9, 3));

// console.log(multiply());

// const result = double(4);
// const result2 = multiply(8, 10);
// console.log(result);
// console.log(result2);

// Template strings
const pName = "Aron";
const hasDog = false;
const roomNo = 42;

let printedHasDog = "has no dog";
if (hasDog) {
  printedHasDog = "has a dog";
}

// const condition = true;
// if (condition) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

// condition ? console.log("Yes") : console.log("No")

const printedResult =
  "The person with name " +
  pName +
  " " +
  printedHasDog +
  ". And stays in room number" +
  roomNo;

const betterPrintedResult = `The person with name ${pName} ${
  hasDog ? "has" : "doesn't have"
} a dog. And stays in room number ${roomNo}.`;

// console.log(betterPrintedResult);

const check = null;

// if (check) {
//   console.log("DIT IS WAAR");
// } else {
//   console.log("DIT IS ONWAAR");
// }

// Object destructuring

const student1 = {
  personName: "Albert",
  age: 76,
  subject: "Physics",
  pet: {
    petName: "Chico Marx",
    type: "Dog",
  },
};
// console.log(student1.friends[0].name);

// console.log(crazyArray[0][1]);
// console.log(student1.pet.petName);

const studentName = student1.name;
const studentAge = student1.age;

const { personName, age, subject } = student1;
// console.log(personName);
// console.log(age);

// console.log(2 * studentAge);
// console.log(2 * student1.age);

// Objects as arguments

const checkVergunningVoorTanker = (
  volume,
  liters,
  materiaal,
  diesel,
  gewicht,
  bemanning
) => {
  if (liters < 50) {
    return true;
  } else {
    return false;
  }
};

const checkVergunningVoorTanker2 = (tanker) => {
  const { volume, liters, materiaal, diesel, gewicht, bemanning } = tanker;
  if (liters < 50) {
    return true;
  } else {
    return false;
  }
};

const checkVergunningVoorTanker3 = ({
  volume,
  liters,
  materiaal,
  diesel,
  gewicht,
  bemanning,
}) => {
  if (liters < 50) {
    return true;
  } else {
    return false;
  }
};

checkVergunningVoorTanker(100, 12, 65, true, 12, 80);
checkVergunningVoorTanker2({
  volume: 100,
  liters: 12,
  materiaal: 65,
  diesel: true,
  gewicht: 12,
  bemanning: 80,
});

// Spread syntax

const a = [1, 2, 3];
// const copy_a = a;

const copy_a = [...a, 4];
// a.push(4);
// a.pop();
// console.log(a);
// console.log(copy_a);

const b = {
  foo: 4,
  bar: "hallo",
  foo: 6,
};
// console.log(b);
// console.log(b.foo);
const copy_b = { ...b, foo: 6 };

// b.foo = 5;

// console.log(copy_b);
