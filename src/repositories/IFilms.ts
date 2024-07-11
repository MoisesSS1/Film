import { InsertFilmDTO } from "../useCases/Films/InsertFilmUseCase/InsertFilmDTO"


export interface IFilm {
    insertFilm({ description, id, name }: InsertFilmDTO): Promise<any>
    deleteFilm(id: string): Promise<any>
    getFilm(id: string): Promise<any>
    updateFilm({ }): Promise<any>
}