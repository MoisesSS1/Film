import { NextFunction, Request, Response } from "express";
import { jwtAuth } from "../services/auth/implementations/jwtAuth";

const authToken = new jwtAuth()

export async function AuthRoutes(req: Request, res: Response, next: NextFunction) {

    const token: any = await authToken.getToken(req)

    try {
        const isValid = await authToken.checkTokenIsValid(token)
        next()

    } catch (error) {
        return res.status(401).json(error.message)
    }
}