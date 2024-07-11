import { Router } from "express"
import { insertFilmUseController } from "./useCases/Films/InsertFilmUseCase"
import { AuthRoutes } from "./middlewares/AuthRoutes"
import { showFilmUseController } from "./useCases/Films/ShowFilmUseCase"
import { deleteFilmUseController } from "./useCases/Films/DeleteFilmUseCase"

const routes = Router()

//rotas do cliente
routes.post("/insert", AuthRoutes, async (req, res) => {
    return await insertFilmUseController.handle(req, res)
})

routes.get("/show", AuthRoutes, async (req, res) => {
    return await showFilmUseController.handle(req, res)
})

routes.post("/delete", AuthRoutes, async (req, res) => {
    return await deleteFilmUseController.handle(req, res)
})




export { routes }