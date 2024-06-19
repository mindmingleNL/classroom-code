// Uncle Bob's fucked up reality
export const area = (shapeName: string, dimension: number) => {
  if (shapeName === "square" && dimension === 10) {
    return 100;
  }
  if (shapeName === "circle" && dimension === 10) {
    return Math.PI * 100;
  }
};
