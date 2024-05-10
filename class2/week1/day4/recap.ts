// Spreading of arrays

// const grades = [1, 2, 3, 4];

// const gradesCopy = [0, ...grades.filter((sheep) => sheep < 3)];

// interface Human {
//   humanName: string;
//   age: number;
// }

// interface Pet {
//   pName: string;
//   kind: "dog" | "cat";
//   age: number;
//   //   owner?: Human;
//   hobbies?: string[];
// }

// const pet: Pet = {
//   pName: "fifi",
//   kind: "dog",
//   age: 3,
//   //   pName: "fluffy",
// };

// const newPet: Pet = { ...pet, pName: "fluffy", hobbies: ["fetch"] };

// // pet.pName = "fluffy";

// console.log(newPet);

// console.log(grades);
// console.log(gradesCopy);

// const newGrades = grades.filter((num) => num < 3);

// grades.push(5); // mutating operation
// grades.push(5);

// console.log(grades); //?
// console.log(newGrades);

// grades = [12, 4];

interface Supplier {
  sName: string;
  country: "the netherlands" | "aruba" | "kazachstan" | "india" | "vietnam";
}

interface FruitStock {
  fType: "banana" | "apples" | "kiwis";
  amount: number;
  unitPrice: number;
  organic: boolean;
  suppliers: Supplier[];
}

const fruitStocks: FruitStock[] = [
  {
    fType: "banana",
    amount: 100,
    unitPrice: 1.5,
    organic: true,
    suppliers: [
      { sName: "Banana Suppliers Ltd", country: "aruba" },
      { sName: "Tropical Fruits Co.", country: "vietnam" },
      { sName: "Fresh Kiwi Farm", country: "vietnam" },
    ],
  },
  {
    fType: "apples",
    amount: 200,
    unitPrice: 2,
    organic: false,
    suppliers: [
      { sName: "Apple Orchard Inc.", country: "the netherlands" },
      { sName: "Fruit Empire", country: "india" },
      { sName: "Tropical Fruits Co.", country: "vietnam" },
    ],
  },
  {
    fType: "kiwis",
    amount: 150,
    unitPrice: 3,
    organic: true,
    suppliers: [
      { sName: "Kiwi Growers Association", country: "kazachstan" },
      { sName: "Fresh Kiwi Farm", country: "vietnam" },
      { sName: "Banana Suppliers Ltd", country: "aruba" },
    ],
  },
];

// Output:
// [{fType: "apples", value: 400},{fType: "bananas", value: 1200}, {fType: "kiwis", value: 1400} ]

const totalValuePerFruit = fruitStocks.map((fs) => {
  return { fType: fs.fType, value: fs.amount * fs.unitPrice };
});

// console.log(totalValuePerFruit);

// Output: ["kiwis", "pineapple"]

const profitableFruits = fruitStocks
  .filter((fs) => {
    return fs.amount * fs.unitPrice >= 400;
  })
  .map((fs) => {
    return fs.fType;
  });

// const profitableFruitsNames = profitableFruits;

// console.log(profitableFruits);

const newSupplier: Supplier = {
  country: "the netherlands",
  sName: "Fruit en meer!",
};

const newFruitStock = fruitStocks.map((fs) => {
  //   return {
  //     fType: fs.fType,
  //     amount: fs.amount,
  //     unitPrice: fs.unitPrice,
  //     organic: fs.organic,
  //     suppliers: fs.suppliers,
  //     suppliers: [...fs.suppliers, newSupplier],
  //   };
  return {
    ...fs,
    suppliers: [...fs.suppliers, newSupplier],
  };
});

console.log(newFruitStock);
