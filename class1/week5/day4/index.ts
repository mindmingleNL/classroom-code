export interface Person {
  age: number;
  country: "NL" | "BE";
}

export const canDrinkAlcohol = (person: Person): boolean => {
  if (person.age >= 18 && person.country === "NL") {
    return true;
  }
  if (person.age > 16 && person.country === "BE") {
    return true;
  }
  return false;
};

// // Edge cases

// // input data (test data)
// const p1: Person = { age: 17, country: "NL" };
// const p2: Person = { age: 18, country: "NL" };
// const p3: Person = { age: 15, country: "BE" };
// const p4: Person = { age: 16, country: "BE" };
// const p5: Person = { age: Infinity, country: "BE" };
// const p6: Person = { age: NaN, country: "BE" };

// // result
// const result = canDrinkAlcohol(p2);

// // expect
// const expected = true;

// if (result !== expected) {
//   throw new Error(`${result} is not the same as ${expected}`);
// }
