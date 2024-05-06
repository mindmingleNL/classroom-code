// console.log("First");

// for (let cow = 0; cow <= 10; cow = cow + 2) {
//   console.log(cow);
//   console.log("Second");
// }

// console.log("Third");

// function sayHi(who, where) {
//   // const greeting = "Hai, " + who + "! Nice to see you at " + where;
//   const greeting2 = `Hi! ${who}! Nice to see you at ${where}`;
//   console.log(greeting2);
// }

const sayHiArrow = (who, where) => {
  const greeting2 = `Hi! ${who}! Nice to see you at ${where}`;
  // console.log(greeting2);
  return greeting2;
};

// const result = sayHiArrow("Swen", "Supermarket");
// console.log(result);

// const sayHiCopy = sayHi;

// const thing = 5;

// sayHi("Mark", "Train");
// sayHi("Sneha", "Beach");
// sayHi("Yoeran", "Classroom");

const double1 = (num1) => {
  const doubled = num1 * 2;
  // console.log(doubled);
  return doubled;
};

const result1 = double1(18);
const result2 = double1(22);
// console.log(result1, result2);

const crazyResult = double1(double1(double1(22)));
// console.log(crazyResult);

const double2 = (num1, num2) => {
  return num1 * 2;
};

// double2(14);

const double3 = (num1, num2) => {
  if (num1 > num2) {
    return num1 * 2;
  } else {
    return num2 * 2;
  }
};

// console.log(double3(12, 6));
// console.log(double3(12, 90));

const student1 = {
  personName: "Albert",
  age: 76,
  subject: "Physics",
  pet: {
    petName: "Chico Marx",
    type: "Dog",
  },
};

// DRY Don't repeat yourself 👍
// WET Write everything twice 👎

const { personName, age, subject, pet } = student1;
// const studentName = student1.personName;
// const studentAge = student1.age;
// const studentSubject = student1.subject;
// const pet = student1.pet;

let result = `${personName} is ${age} years old. Their subject is ${subject}.`;
if (pet) {
  result = `${result} They have a pet named ${pet.petName} `;
}
// console.log(result);

const stupidObj = {
  a: 1,
  b: 2,
  c: 3,
};

const { a, b, c } = stupidObj;

// console.log(b);
// console.log(a);

// Math, Physics, Biology, Chemistry, History, English, Dutch, Hindi, Russian

const theBetterAvgGrade = (grades) => {
  const {
    math,
    physics,
    biology,
    chemistry,
    history,
    english,
    dutch,
    hindi,
    russian,
  } = grades;
  return (
    (math +
      physics +
      biology +
      chemistry +
      history +
      english +
      dutch +
      hindi +
      russian) /
    9
  );
};
// 8, 5, 9, 2, 8, 3, 4, 5, 10

const avgGrade = (
  math,
  physics,
  biology,
  chemistry,
  history,
  english,
  dutch,
  hindi,
  russian
) => {
  return (
    (math +
      physics +
      biology +
      chemistry +
      history +
      english +
      dutch +
      hindi +
      russian) /
    9
  );
};

avgGrade(8, 5, 9, 2, 8, 3, 4, 5, 10);

theBetterAvgGrade({
  math: 8,
  physics: 5,
  biology: 9,
  chemistry: 2,
  history: 8,
  english: 3,
  dutch: 4,
  hindi: 5,
  russian: 10,
});
