import { InsertFilmDTO } from "../useCases/Films/InsertFilmUseCase/InsertFilmDTO"
import { ShowFilmDTO } from "../useCases/Films/ShowFilmUseCase/ShowFilmDTO"


export interface IFilm {
    insertFilm({ description, id, name }: InsertFilmDTO): Promise<any>
    deleteFilm(id: string): Promise<any>
    getFilm({ id }: ShowFilmDTO): Promise<any>
    updateFilm({ }): Promise<any>
}