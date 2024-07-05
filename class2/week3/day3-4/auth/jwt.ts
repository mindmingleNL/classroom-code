import jwt from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";

interface TokenInfo extends JwtPayload {
  userId: number;
}

const SECRET = process.env.SECRET || "blueberrypie";

export const toToken = (data: TokenInfo): string => {
  const token = jwt.sign(data, SECRET);
  return token;
};

export const toData = (token: string): TokenInfo => {
  const data = jwt.verify(token, SECRET) as TokenInfo;
  return data;
};
