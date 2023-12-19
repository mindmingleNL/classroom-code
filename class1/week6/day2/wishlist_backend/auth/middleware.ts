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
    const headers = req.headers;

    const authHeader = headers["authorization"];
    const isTokenValidFormat =
        authHeader &&
        authHeader.startsWith("Bearer ") &&
        authHeader.split(" ")[1];

    if (isTokenValidFormat) {
        const token = authHeader.split(" ")[1];
        try {
            const data = toData(token);
            req.userId = data.userId;
            next();
        } catch (e) {
            res.status(401).send({ message: "Token missing or invalid" });
        }
    } else {
        res.status(401).send({ message: "Token missing or invalid" });
    }
};

export { authMiddleware };
