import { Request, Response } from "express"
import { DeleteFilmUseCase } from "./DeleteFilmUseCase"


export class DeleteFilmUseController {
    constructor(
        private DeleteFilmUseCase: DeleteFilmUseCase,
    ) {

    }

    async handle(req: Request, res: Response) {

        try {

            const { id } = req.body


            const drop = await this.DeleteFilmUseCase.execute({ id })

            return res.status(200).json({ drop })

        } catch (error) {

            return res.status(400).json({ message: error.message })
        }
    }
}