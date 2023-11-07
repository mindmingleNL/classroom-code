function createUserProfile(name: string, age: number, isAdmin: boolean) {
  console.log(
    `Creating a user profile. Name ${name}, Age: ${age}, Admin: ${isAdmin}`
  );
}

createUserProfile("Aiden", 29, true);

let greeting: string;
greeting = "Hello!";

let age: number = 29;

let isAdmin: boolean = true;

let expectations: undefined = undefined;
let certification: null = null;

interface CertificateInterface {
  date: string;
  class: 0 | 1; // UNION
}

const mindMingleCertificationClassOne: CertificateInterface = {
  date: "01/01/2023",
  class: 0
};

const mindMingleCertificationClassTwo: CertificateInterface = {
  date: "01/01/2024",
  class: 1
};

type StudentNames = "Artem" | "Tannaz" | "Alena" | "Marisha" | "Shruti"; // Union type consisting of literal types

interface Student {
  name: StudentNames;
  location: string;
  class: number;
  hasCertificate: boolean;
  certificate: CertificateInterface;
}

const studentOne: Student = {
  name: "Tannaz",
  location: "Amstelveen",
  class: 1,
  hasCertificate: false,
  certificate: mindMingleCertificationClassTwo
};

const studentTwo: Student = {
  name: "Artem",
  location: "Amsterdam",
  class: 1,
  hasCertificate: false,
  certificate: mindMingleCertificationClassTwo
};

// console.log(Date());

type AcceptedIngredients =
  | "sugar"
  | "flour"
  | "egg"
  | "butter"
  | "alcohol"
  | "baking soda";

// type PreperationMethod = "stove" | "oven" | "microwave";

interface PreperationMethod {
  method: "stove" | "oven" | "microwave"; // Union Type consisting of literal string
  preparationTime: number;
  servingSize: 6; // Literal Type
}

function bakeCake(
  ingredient1: AcceptedIngredients,
  ingredient2: AcceptedIngredients,
  ingredient3: AcceptedIngredients,
  cookingOptions: PreperationMethod
) {
  console.log(
    `We are baking a cake with ${ingredient1}, ${ingredient2} and ${ingredient3}, and with the method: ${cookingOptions.method}`
  );
}

const cakeOptions: PreperationMethod = {
  method: "microwave",
  servingSize: 6,
  preparationTime: 30
};

bakeCake("alcohol", "alcohol", "egg", cakeOptions);

// Union Type is a combination of different accepted types
// Literal Type a literal "string" for example, or a literal "number"
