const coupleOfNumbers: number[] = [1, 2, 3, 4, 5];

const double = (input: number): number => {
  return input * 4;
};

const isEven = (input: number): boolean => {
  return input % 2 === 0;
};

// console.log(coupleOfNumbers.map((numero: number) => numero * 2));
// console.log(coupleOfNumbers.map((numero: number) => double(numero)));
// console.log(coupleOfNumbers.map((numero: number) => "hello"));
// console.log(double(20));

interface Human {
  name: string;
  parent?: Human;
}

const yoeransName = "Yoeran";
const yoeran: Human = { name: yoeransName };
const yoerans: Human[] = [yoeran, yoeran];
const pim: Human = { name: "Pim", parent: yoeran };
const joanne: Human = { name: "Joanne", parent: pim };
const jantje: Human = { name: "Jantje", parent: joanne };
