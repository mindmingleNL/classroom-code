import { area } from "./shapes";

test("area calculates the area of a square", () => {
  expect(area("square", 10)).toBe(100);
});

test("area calculates the area of a square", () => {
  expect(area("circle", 10)).toBe(Math.PI * 100);
});
