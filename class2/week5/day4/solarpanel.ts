export const calculateYield = (amount: number, yieldPerPanel: number) => {
  if (yieldPerPanel === 0 || isNaN(yieldPerPanel)) {
    throw new Error("You fucked up!");
  }
  return amount * yieldPerPanel;
};

// console.log(calculateYield(10, 50) === 500);
// console.log(calculateYield(10, 50) !== 501);

// try {
//   const result = calculateYield(10, 0);
//   console.log(false);
// } catch (error) {
//   console.log(true);
// }
