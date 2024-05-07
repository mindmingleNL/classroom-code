const tax: number = 21;
const b: string = "hello";
const c: boolean = true;
const d: null = null;
const e: undefined = undefined;
const f: object = {};
const g: [] = [];

// const result:number = tax+b;
// console.log(tax + b);

// let dog:string;

// const dogConst = "Fifi";

// if (dog === undefined) {
// }

const names: string[] = ["Mark", "Brandon", "Sneha", "Trang", "Nargiz"];
const ages: number[] = [10, 120, 20];
const switches: boolean[] = [true, false, true, true];

const crazy: number[][] = [
  [1, 2],
  [0, 0],
  [40, 40],
];

let list: number[] = [];
list.push(5);
// console.log(list);
list = [];
// console.log(list);

interface Pet {
  petName: string;
  age: number;
  kind: string;
}

interface Human {
  personName: string;
  age: number;
  happy: boolean;
  pets?: Pet[];
}

const person: Human = {
  personName: "Nargiz",
  age: 30,
  happy: true,
  pets: [
    {
      petName: "Logan",
      age: 2,
      kind: "main coone cat",
    },
  ],
};

const anotherPerson: Human = {
  personName: "Yoeran",
  age: 36,
  happy: true,
};

const classOfPersons: Human[] = [person, anotherPerson];

// for (let i = 0; i < classOfPersons.length; i++) {
//   const person = classOfPersons[i];
//   if (person.pets !== undefined) {
//     console.log(person.pets[0].age);
//   } else {
//     console.log(person.pets);
//   }
// }

// console.log(person.pets);
// console.log(anotherPerson.pets);
