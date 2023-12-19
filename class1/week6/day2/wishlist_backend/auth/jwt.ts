import jwt from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";

const secret = "Hand me the keys, you fucking cocksucker.";

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
