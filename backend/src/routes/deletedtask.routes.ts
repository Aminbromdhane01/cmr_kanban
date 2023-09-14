import { Router } from "express";
import { DeletedTaskController } from "../controllers/deleted.controller";
const routes = Router();

routes.get('/' , DeletedTaskController.getall)

export default routes;