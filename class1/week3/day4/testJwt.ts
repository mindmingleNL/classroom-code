import { toData, toToken } from "./auth/jwt";

// Example user information that we want to convert to a token.
const exampleUserInfo = {
  userId: 1234 // An arbitrary user ID.
};

// // Creating a token from the user information. Think of it as sealing the user's information in a secure envelope.
// const userToken = toToken(exampleUserInfo);
// console.log("Generated JWT Token:", userToken);

// Converting the token back to user information. Similar to opening the secure envelope to reveal the contents.
const retrievedUserInfo = toData(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTcwMDczMzM3NCwiZXhwIjoxNzAxOTQyOTc0fQ.S2BHMjfdxeyuYXrr3ae2D2vaBQ2OJn_sR16uTpAKXQ8"
);
console.log("Retrieved User Information from JWT Token:", retrievedUserInfo);
