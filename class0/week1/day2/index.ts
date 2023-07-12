// const check = (el: any, cow: number[]) => {
//   return cow.includes(el);
// };

// check(3, 9);

// Simple basic types

let n: number = 5;
let m: boolean = true;
let o: string = "Hello";
let z: undefined = undefined;

//

const grades: number[] = [10, 8, 6];
const gradess: number[][] = [[1, 2], [4, 5], [12]];

const stuff: boolean[] = [false, true, false];

// any
let blah: any = true;
blah = 5;

interface Pet {
  name: string;
  kind: string;
}

// Objects
interface Person {
  name: string;
  age: number;
  profession: string;
  adress?: string;
  pets: Pet[];
}

const swen: Person = {
  name: "Swen",
  age: 30,
  profession: "teacher",
  adress: "NaN",
  pets: [
    {
      name: "Garfield",
      kind: "Cat"
    },
    {
      name: "Snoopy",
      kind: "dog"
    }
  ]
};

// const classMembers: Person[] = [
//   {
//     name: "Swen",
//     age: 30,
//     profession: "teacher",
//     adress: "NaN",
//     hasPet: true
//   },
//   {
//     name: "Aiden",
//     age: 30,
//     profession: "teacher",
//     adress: "NaN",
//     hasPet: true
//   }
// ];

const theOldFarm = 5;
