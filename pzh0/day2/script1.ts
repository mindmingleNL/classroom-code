// Secure TypeScript Code Examples

// Function to double the numeric value with type enforcement
function double(x: number): number {
  return x * 2;
}

// TypeScript will provide type safety, preventing strings from being used
// console.log(double("4")); // TypeScript will raise a compile-time error

// Function to multiply two numbers with explicit types
function multiply(z: number, u: number): number {
  return z * u;
}

// TypeScript will ensure that only numbers can be used as arguments
// console.log(multiply("6", "3")); // TypeScript will raise a compile-time error

// Defining an interface for tanker for type safety
interface Tanker {
  volume: number;
  liters: number;
  materiaal: number;
  diesel: boolean;
  gewicht: number;
  bemanning: number;
}

// Check Tanker Vergunning
const checkVergunningVoorTanker = (tanker: Tanker): boolean => {
  const { liters } = tanker;
  return liters < 50;
};

// TypeScript will enforce that the object passed has the correct property types
const resultVergunning = checkVergunningVoorTanker({
  volume: 100,
  liters: 12, // Must be a number
  materiaal: 65,
  diesel: true,
  gewicht: 12,
  bemanning: 80
});
console.log(resultVergunning); // Now safe from type errors

// Using spread syntax with type safety
const a: number[] = [1, 2, 3];
const copy_a: number[] = [...a, 4]; // Only numbers can be spread into the array
console.log(copy_a); // Correctly typed array

// Object with explicit property types can't have duplicate properties with different values
const b: { foo: number; bar: string } = {
  foo: 4,
  bar: "hallo"
};
const copy_b: { foo: number; bar: string } = { ...b, foo: 6 };
console.log(copy_b); // Correctly overrides foo
