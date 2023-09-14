import { Router } from "express";
import { UpdatedTaskController } from "../controllers/updated.controller";
const routes = Router();

routes.get('/findbytaskid/:taskid', UpdatedTaskController.getbyTaskID)
export default routes;