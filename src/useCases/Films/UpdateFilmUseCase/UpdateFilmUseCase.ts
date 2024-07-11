import { IFilm } from "../../../repositories/IFilms";
import { UpdateFilmDTO } from "./UpdateFilmDTO";


export class UpdateFilmUseCase {
    constructor(
        private repositoryFilms: IFilm
    ) {

    }


    async execute({ description, name, id }: UpdateFilmDTO) {

        try {
            const UpdateFilM = await this.repositoryFilms.updateFilm({ description, name, id })

            return UpdateFilM

        } catch (error) {

            throw new Error("Erro ao atualizar filme no banco de dados")
        }

    }
}