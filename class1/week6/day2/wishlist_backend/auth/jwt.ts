import jwt from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";

const secret = process.env["TOKEN_SECRET"] || "A nice secret";

interface TokenInfo extends JwtPayload {
  id: number;
  username: string;
}

export const toToken = (data: TokenInfo) => {
  const token = jwt.sign(data, secret, { expiresIn: "14 days" });
  return token;
};

export const toData = (token: string) => {
  const data = jwt.verify(token, secret) as TokenInfo;
  return data;
};
