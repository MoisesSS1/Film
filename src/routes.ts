import { Router } from "express"
import { insertFilmUseController } from "./useCases/Films/InsertFilmUseCase"
import { AuthRoutes } from "./middlewares/AuthRoutes"

const routes = Router()

//rotas do cliente
routes.post("/insert", AuthRoutes, async (req, res) => {
    return await insertFilmUseController.handle(req, res)
})




export { routes }