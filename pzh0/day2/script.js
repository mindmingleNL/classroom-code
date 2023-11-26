//////////////
// Working with objects

const checkVergunningVoorTanker = (tanker) => {
  const { volume, liters, materiaal, diesel, gewicht, bemanning } = tanker;
  if (liters < 50) {
    return true;
  } else {
    return false;
  }
};

const resultVergunning = checkVergunningVoorTanker({
  volume: 100,
  liters: "12",
  materiaal: 65,
  diesel: true,
  gewicht: 12,
  bemanning: 80
});

console.log(resultVergunning);

//////////////
// Inference

const obj = { width: 10, height: 15 };
const area = obj.width * obj.heigth;

//////////////
// Optional Properties

const user = {
  name: "John",
  id: 0
};

//////////////
// Basics
// Number types
// String types
// Booleans types
// 'special' types

//////////////
// Typing an Array
