import { repositoryFilms } from "../../../repositories/RepositoryFilms"
import { UpdateFilmUseCase } from "./UpdateFilmUseCase"
import { UpdateFilmUseController } from "./UpdateFilmUseController"

const repoFilms = new repositoryFilms()
const updateFilmUseCase = new UpdateFilmUseCase(repoFilms)
const updateFilmUseController = new UpdateFilmUseController(updateFilmUseCase)

export { updateFilmUseController, updateFilmUseCase } 