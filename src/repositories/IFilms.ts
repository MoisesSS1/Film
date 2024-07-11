
import { DeleteFilmDTO } from "../useCases/Films/DeleteFilmUseCase/DeleteFilmDTO"
import { InsertFilmDTO } from "../useCases/Films/InsertFilmUseCase/InsertFilmDTO"
import { ShowFilmDTO } from "../useCases/Films/ShowFilmUseCase/ShowFilmDTO"
import { UpdateFilmDTO } from "../useCases/Films/UpdateFilmUseCase/UpdateFilmDTO"


export interface IFilm {
    insertFilm({ description, id, name }: InsertFilmDTO): Promise<any>
    deleteFilm({ id }: DeleteFilmDTO): Promise<any>
    getFilm({ id }: ShowFilmDTO): Promise<any>
    updateFilm({ description, id, name }: UpdateFilmDTO): Promise<any>
}