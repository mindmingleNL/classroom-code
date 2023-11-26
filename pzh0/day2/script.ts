//////////////
// Example 1

// Function to double the value
function double(x) {
  return x * 2;
}

// console.log(double("4"));

//////////////
// Example 2

function multiply(num1, num2) {
  return num1 * num2;
}

// console.log(multiply("6", "3"));

//////////////
// Example 3

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

// console.log(resultVergunning);

//////////////
// Example 4 - Inference

const obj = { width: 10, height: 15 };
const area = obj.width * obj.heigth;
// console.log(area);
