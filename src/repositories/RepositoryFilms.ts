import { InsertFilmDTO } from "../useCases/Films/InsertFilmUseCase/InsertFilmDTO";
import { IFilm } from "./IFilms";

export class repositoryFilms implements IFilm {

    async insertFilm({ description, id, name }: InsertFilmDTO): Promise<any> {

        return { description, id, name }

    }

    async getFilm(id: string): Promise<any> {

    }

    async updateFilm({ }: {}): Promise<any> {

    }


    async deleteFilm(id: string): Promise<any> {

    }
}