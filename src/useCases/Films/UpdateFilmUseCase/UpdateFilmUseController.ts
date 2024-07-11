import { Request, Response } from "express"
import { UpdateFilmUseCase } from "./UpdateFilmUseCase"


export class UpdateFilmUseController {
    constructor(
        private updateFilmUseCase: UpdateFilmUseCase,
    ) {

    }

    async handle(req: Request, res: Response) {

        try {
            const { name, description, id } = req.body

            if (!id) {
                throw new Error("Necessário incluir id do filme!")
            }

            if (!description || description.length < 9) {
                throw new Error("Descrição precisa ter no minimo 10 caracteres!")
            }
            if (!name || name.length < 4) {
                throw new Error("Nome precisa ter no minimo 5 caracteres!")
            }

            const update = await this.updateFilmUseCase.execute({ description, name, id })

            return res.status(200).json({ update })

        } catch (error) {

            return res.status(400).json({ message: error.message })
        }
    }
}