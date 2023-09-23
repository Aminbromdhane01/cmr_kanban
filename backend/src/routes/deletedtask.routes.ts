import { Router } from "express";
import { DeletedTaskController } from "../controllers/deleted.controller";
import authenticateToken from "../middlewares/authentifiaction";
const routes = Router();

routes.get('/' ,authenticateToken, DeletedTaskController.getall)
routes.get('/count',DeletedTaskController.count )

export default routes;