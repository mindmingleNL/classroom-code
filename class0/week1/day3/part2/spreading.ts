// const aWeirdOne = 12, 42, 46, 89;
// const aWeirdArray = [aWeirdOne];

const lotteryNumber = [12, 42, 46, 89];

const something = [...lotteryNumber, 42];

lotteryNumber[1] = 15;

// console.log(something);
// console.log(lotteryNumber);

// const newWeirdThing = [...lotteryNumber];
// console.log(newWeirdThing);

const car = {
  color: "blue",
  horsePower: 1,
  brand: "Fiat",
  used: true
};

const car2 = { ...car, color: "yellow", horsePower: 2, bla: "foo" };

console.log(car2);
