import { canDrinkAlcohol, Person } from "./index";

test("A person of age 18 should be able to drink alcohol in the Netherlands", () => {
  const person: Person = { age: 18, country: "NL" };

  expect(canDrinkAlcohol(person)).toBe(true);
});

test("A person of age 18 should be able to drink alcohol in Belgium", () => {
  const person: Person = { age: 18, country: "BE" };

  expect(canDrinkAlcohol(person)).toBe(true);
});

test("A person of age 15 should not be able to drink alcohol in Belgium", () => {
  const person: Person = { age: 15, country: "BE" };

  expect(canDrinkAlcohol(person)).toBe(false);
});
