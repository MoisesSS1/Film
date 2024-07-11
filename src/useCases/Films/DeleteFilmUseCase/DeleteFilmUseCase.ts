import { IFilm } from "../../../repositories/IFilms";
import { DeleteFilmDTO } from "./DeleteFilmDTO";


export class DeleteFilmUseCase {
    constructor(
        private repositoryFilms: IFilm
    ) {

    }


    async execute({ id }: DeleteFilmDTO) {

        try {
            const DeleteFilM = await this.repositoryFilms.deleteFilm({ id })

            return DeleteFilM

        } catch (error) {

            throw new Error("Erro ao excluir filme no banco de dados!")
        }

    }
}