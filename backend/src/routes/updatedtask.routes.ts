import { Router } from "express";
import { UpdatedTaskController } from "../controllers/updated.controller";
import authenticateToken from "../middlewares/authentifiaction";
const routes = Router();

routes.get('/findbytaskid/:taskid',authenticateToken, UpdatedTaskController.getbyTaskID)
export default routes;