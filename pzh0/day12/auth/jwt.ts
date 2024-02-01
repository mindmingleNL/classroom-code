import { sign, verify } from "jsonwebtoken";

const secret =
  process.env.JWT_SECRET || "209uepkifdfhjdofkikjdwofihjwqepoihjfoifh";

interface TokenInfo {
  userId: number;
}

export const toToken = (data: TokenInfo) => {
  const token = sign(data, secret, { expiresIn: "2d" });
  return token;
};

export const toData = (token: string) => {
  const data = verify(token, secret);
  return data as TokenInfo;
};
