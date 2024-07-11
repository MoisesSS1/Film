import { IFilm } from "../../../repositories/IFilms";
import { InsertFilmDTO } from "./InsertFilmDTO";


export class InsertFilmUseCase {
    constructor(
        private repositoryFilms: IFilm
    ) {

    }


    async execute({ description, id, name }: InsertFilmDTO) {

        try {
            const InsertFilM = await this.repositoryFilms.insertFilm({ description, id, name })

            return InsertFilM

        } catch (error) {

            throw new Error("Erro ao salvar filme no banco de dados")
        }

    }
}