import { Request, Response } from "express"
import { InsertFilmUseCase } from "./InsertFilmUseCase"
import { IGenerateId } from "../../../services/generate_Id/IGenerateId"


export class InsertFilmUseController {
    constructor(
        private InsertFilmUseCase: InsertFilmUseCase,
        private uuid: IGenerateId

    ) {

    }

    async handle(req: Request, res: Response) {

        try {
            const { name, description } = req.body

            if (!description || description.length < 9) {
                throw new Error("Descrição precisa ter no minimo 10 caracteres!")
            }
            if (!name || name.length < 4) {
                throw new Error("Nome precisa ter no minimo 5 caracteres!")
            }

            const id = await this.uuid.generateId()
            const insertFilme = await this.InsertFilmUseCase.execute({ description, id, name })

            return res.status(200).json({ insertFilme })

        } catch (error) {

            return res.status(400).json({ message: error.message })
        }
    }
}