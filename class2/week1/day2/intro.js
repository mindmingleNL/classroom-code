var tax = 21;
var b = "hello";
var c = true;
var d = null;
var e = undefined;
var f = {};
var g = [];
// const result:number = tax+b;
// console.log(tax + b);
// let dog:string;
// const dogConst = "Fifi";
// if (dog === undefined) {
// }
var names = ["Mark", "Brandon", "Sneha", "Trang", "Nargiz"];
var ages = [10, 120, 20];
var switches = [true, false, true, true];
var crazy = [
    [1, 2],
    [0, 0],
    [40, 40],
];
var list = [];
list.push(5);
// console.log(list);
list = [];
var person = {
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
var anotherPerson = {
    personName: "Yoeran",
    age: 36,
    happy: true,
};
var classOfPersons = [person, anotherPerson];
for (var i = 0; i < classOfPersons.length; i++) {
    var person_1 = classOfPersons[i];
    console.log(person_1.pets[0].age);
    //   if (person.pets !== undefined) {
    //     console.log(person.pets[0].age);
    //   } else {
    //     console.log(person.pets[0]);
    //   }
}
// console.log(person.pets);
// console.log(anotherPerson.pets);
