import { Request, Response } from "express"
import { ShowFilmUseCase } from "./ShowFilmUseCase"


export class ShowFilmUseController {
    constructor(
        private ShowFilmUseCase: ShowFilmUseCase,
    ) {

    }

    async handle(req: Request, res: Response) {

        try {
            const { id } = req.query

            const idRefil = id.toString()

            const getFilms = await this.ShowFilmUseCase.execute({ id: idRefil })

            return res.status(200).json({ getFilms })

        } catch (error) {

            return res.status(400).json({ message: error.message })
        }
    }
}