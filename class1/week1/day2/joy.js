"use strict";
// const a: number = 5;
// const b: string = "Swen";
// const c: boolean = true;
// const d: undefined = undefined;
// const e: null = null;
// const a: number = 10;
// console.log(a * 2);
const b = [];
b.push(10);
const c = [true, false];
const d = ["Swen", "Aiden", "Tannaz"];
const weird = [
    [1, 2],
    [5, 2],
    [12, 19],
];
const res = weird[2][1];
console.log(res); // 19
const thisBuilding = {
    name: "Graduate Space",
    adress: "Euclideslaan",
    houseNo: 60,
    open: true,
    price: 300000,
};
const thatBuilding = {
    name: "HKU",
    adress: "Euclideslaan",
    houseNo: 62,
    open: false,
};
const street = [
    thatBuilding,
    { name: "bla", houseNo: 1, adress: "ste", open: true },
    { name: "bloe", houseNo: 2, adress: "ste", open: false },
];
