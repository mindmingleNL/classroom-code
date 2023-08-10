import { sum, subtract } from "./math";

test("Test for sum function", () => {
  const sumResult = sum(10, 7);
  expect(sumResult).toBe(3);
});

test("Test for subtract function", () => {
  const sumResult = subtract(10, 7);
  expect(sumResult).toBe(3);
});

/** Test for Sum */
// const resultOfSum = sum(10, 7);
// const expectedSum = 17;

// if (resultOfSum !== expectedSum) {
//   throw new Error(`${resultOfSum} is not equal to ${expectedSum}`);
// }
