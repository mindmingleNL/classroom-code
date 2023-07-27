import jwt from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";

const secret = "230jekjd08ufkdff20328120974@$^$#09fpfip";

interface TokenInfo extends JwtPayload {
  userId: number;
}

export const toToken = (data: TokenInfo) => {
  const token = jwt.sign(data, secret, { expiresIn: "4 days" });
  return token;
};

export const toData = (token: string) => {
  const data = jwt.verify(token, secret) as TokenInfo;
  return data;
};
