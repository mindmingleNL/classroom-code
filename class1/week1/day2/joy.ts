// const a: number = 5;
// const b: string = "Swen";
// const c: boolean = true;
// const d: undefined = undefined;
// const e: null = null;

const a: number = 10;
console.log(a * 2);

function double(x: number) {
  return true;
  // return x * 2;
}
const doubleA = (x: number): number => {
  return x * 2;
};

double(5);
const b: number[] = [];

b.push(10);

const c: boolean[] = [true, false];
const d: string[] = ["Swen", "Aiden", "Tannaz"];

const weird: number[][] = [
  [1, 2],
  [5, 2],
  [12, 19],
];

const res = weird[2][1];

console.log(res); // 19

interface Building {
  name: string;
  adress: string;
  houseNo: number;
  open: boolean;
  price?: number;
}

const thisBuilding: Building = {
  name: "Graduate Space",
  adress: "Euclideslaan",
  houseNo: 60,
  open: true,
  price: 300000,
};

const thatBuilding: Building = {
  name: "HKU",
  adress: "Euclideslaan",
  houseNo: 62,
  open: false,
};

const street: Building[] = [
  thatBuilding,
  { name: "bla", houseNo: 1, adress: "ste", open: true },
  { name: "bloe", houseNo: 2, adress: "ste", open: false },
];

const thingthing = street[2].price;
