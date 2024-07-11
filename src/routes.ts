import { Router } from "express"
import { insertFilmUseController } from "./useCases/Films/InsertFilmUseCase"
import { AuthRoutes } from "./middlewares/AuthRoutes"
import { showFilmUseController } from "./useCases/Films/ShowFilmUseCase"

const routes = Router()

//rotas do cliente
routes.post("/insert", AuthRoutes, async (req, res) => {
    return await insertFilmUseController.handle(req, res)
})

routes.get("/show", AuthRoutes, async (req, res) => {
    return await showFilmUseController.handle(req, res)
})




export { routes }