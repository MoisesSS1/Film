import jwt from "jsonwebtoken"
import { IAuth } from "../IAuth";
import secret from "../secret";
import { Request } from "express";


export class jwtAuth implements IAuth {

    //gera o token e inclui id
    async generateToken(id: string): Promise<string> {
        const newToken = await jwt.sign({ id: id }, secret.secret)
        return newToken
    }

    async getToken(req: Request) {
        const token: any = await req.headers.authorization?.replace("Bearer ", "").toString()
        return token
    }

    //verifica se token é válido
    async checkTokenIsValid(token: string): Promise<any> {
        const checkTokenIsValid = await jwt.verify(token, secret.secret)
        return
    }

    //obtem informações do token
    async decodedToken(token: string): Promise<any> {
        const infoToken: any = await jwt.decode(token)
        return infoToken.id
    }


}