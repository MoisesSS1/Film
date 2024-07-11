import { repositoryFilms } from "../../../repositories/RepositoryFilms"
import { uuidGenerateId } from "../../../services/generate_Id/uuid/uuidGenerateId"
import { InsertFilmUseCase } from "./InsertFilmUseCase"
import { InsertFilmUseController } from "./InsertFilmUseController"


const generate_Id = new uuidGenerateId()
const repoFilms = new repositoryFilms()
const insertFilmUseCase = new InsertFilmUseCase(repoFilms)
const insertFilmUseController = new InsertFilmUseController(insertFilmUseCase, generate_Id)

export { insertFilmUseController, insertFilmUseCase } 