
import { DeleteFilmDTO } from "../useCases/Films/DeleteFilmUseCase/DeleteFilmDTO";
import { InsertFilmDTO } from "../useCases/Films/InsertFilmUseCase/InsertFilmDTO";
import { ShowFilmDTO } from "../useCases/Films/ShowFilmUseCase/ShowFilmDTO";
import { UpdateFilmDTO } from "../useCases/Films/UpdateFilmUseCase/UpdateFilmDTO";
import { IFilm } from "./IFilms";

export class repositoryFilms implements IFilm {

    async insertFilm({ description, id, name }: InsertFilmDTO): Promise<any> {

        return { description, id, name }

    }

    async getFilm({ id }: ShowFilmDTO): Promise<any> {

        // se id for falso, retornar todos os documentos
        return {
            name: "name",
            id: id
        }
    }

    async updateFilm({ description, id, name }: UpdateFilmDTO): Promise<any> {

        return {
            description, id, name
        }

    }


    async deleteFilm({ id }: DeleteFilmDTO): Promise<any> {

        return {
            id,
            message: "Filme excluido!"
        }

    }
}