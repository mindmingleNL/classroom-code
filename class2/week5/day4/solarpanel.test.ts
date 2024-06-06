import { calculateYield } from "./solarpanel";

test("Calculates the correct amount", () => {
  const calculated = calculateYield(10, 50);
  expect(calculated).toBe(500);
});

test("Doesn't calculate the wrong amount", () => {
  const calculated = calculateYield(10, 50);
  expect(calculated).not.toBe(501);
});

test("Throws an error when the yield is zero", () => {
  expect(() => {
    calculateYield(10, 0);
  }).toThrow("You fucked up!");
});

test("Throws an error when the yield is NaN", () => {
  expect(() => {
    calculateYield(10, NaN);
  }).toThrow("You fucked up!");
});
