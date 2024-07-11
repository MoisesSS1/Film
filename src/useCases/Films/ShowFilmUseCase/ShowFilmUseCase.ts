import { IFilm } from "../../../repositories/IFilms";
import { ShowFilmDTO } from "./ShowFilmDTO";


export class ShowFilmUseCase {
    constructor(
        private repositoryFilms: IFilm
    ) {

    }


    async execute({ id }: ShowFilmDTO) {

        try {

            const ShowFilm = await this.repositoryFilms.getFilm({ id })

            return ShowFilm

        } catch (error) {

            throw new Error("Erro ao buscar filme(s) no banco de dados!")
        }

    }
}