// Import the required functions from the jsonwebtoken package.
import jwt from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";

// Define a secret key used for encrypting and decrypting tokens - akin to a master password.
const secret = "apple-pie"; // This can be any random string, longer is better (safer)

// 'TokenInfo' extends the basic JWT payload with a 'userId' to uniquely identify the user.
interface TokenInfo extends JwtPayload {
  userId: number; // This custom field will store the user's unique identifier.
}

// Function to convert user information (TokenInfo) into an encrypted token using the secret key.
export const toToken = (data: TokenInfo) => {
  // The jwt.sign function creates a new token with the user data, encrypted using the secret.
  // The token will automatically expire after 14 days.
  const token = jwt.sign(data, secret, { expiresIn: "14 days" });
  return token; // Returns the encrypted token.
};

// Function to decrypt a token back into the original user data (TokenInfo).
export const toData = (token: string) => {
  // The jwt.verify function decrypts the token using the same secret key used for encryption.
  // If the token has been tampered with or is expired, an error will be thrown.
  const data = jwt.verify(token, secret) as TokenInfo;
  return data; // Returns the user information contained within the token.
};
