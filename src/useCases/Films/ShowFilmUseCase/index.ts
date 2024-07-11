import { repositoryFilms } from "../../../repositories/RepositoryFilms"
import { ShowFilmUseCase } from "./ShowFilmUseCase"
import { ShowFilmUseController } from "./ShowFilmUseController"

const repoFilms = new repositoryFilms()
const showFilmUseCase = new ShowFilmUseCase(repoFilms)
const showFilmUseController = new ShowFilmUseController(showFilmUseCase)

export { showFilmUseController, showFilmUseCase } 