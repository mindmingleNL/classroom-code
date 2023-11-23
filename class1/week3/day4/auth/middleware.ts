import express, { NextFunction, Request, Response } from "express";
import { toData } from "./jwt";

export interface AuthRequest extends Request {
  userId?: number;
}

const authMiddleware = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  // Extract the 'authorization' header from the request to check for a bearer token.
  const headers = req.headers;

  // Check if the token is provided in the 'Bearer <token>' format.
  const authHeader = headers["authorization"];
  const isTokenValidFormat =
    authHeader && authHeader.startsWith("Bearer ") && authHeader.split(" ")[1];

  if (isTokenValidFormat) {
    const token = authHeader.split(" ")[1]; // Extract the actual token string.
    try {
      // Attempt to decode and verify the token. If invalid, an error will be thrown.
      const data = toData(token);
      // If we reached this point, the toData didn't give an error and the token will be valid!

      // Let's add the userId to the req object so we can use it in our routes
      req.userId = data.userId;

      next(); // Call 'next' to continue to the route handler.
    } catch (e) {
      // Token verification failed or token expired; send an unauthorized status response.
      res.status(401).send({ message: "Token missing or invalid" });
    }
  } else {
    // Either the 'Authorization' header is missing or the format is incorrect.
    res.status(401).send({ message: "Token missing or invalid" });
  }
};

export { authMiddleware };
