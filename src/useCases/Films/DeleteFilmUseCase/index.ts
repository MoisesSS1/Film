import { repositoryFilms } from "../../../repositories/RepositoryFilms"
import { DeleteFilmUseCase } from "./DeleteFilmUseCase"
import { DeleteFilmUseController } from "./DeleteFilmUseController"


const repoFilms = new repositoryFilms()
const deleteFilmUseCase = new DeleteFilmUseCase(repoFilms)
const deleteFilmUseController = new DeleteFilmUseController(deleteFilmUseCase)

export { deleteFilmUseController, deleteFilmUseCase } 