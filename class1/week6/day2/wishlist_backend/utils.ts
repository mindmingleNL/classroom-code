import { Response } from "express";

export const sendServerError = (res: Response) => {
  res.status(500).send({ message: "Something went wrong!" });
};

const canDrinkAlcohol = (user: {
  name: string;
  age: number;
  country: "BE" | "NL";
}) => {
  if (user.age > 16) {
    if (user.country === "BE") {
      return true;
    }
    if (user.country === "NL") {
      return false;
    }
  }
  if (user.age > 18) {
    return true;
  }
  return false;
};
