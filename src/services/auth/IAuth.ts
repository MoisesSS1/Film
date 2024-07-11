import { Request } from "express"

export interface IAuth {
    getToken(req: Request)//gera o token e inclui email e id
    generateToken(id: string): Promise<string>
    decodedToken(token: string): Promise<any>
    checkTokenIsValid(token: string): Promise<any>

}