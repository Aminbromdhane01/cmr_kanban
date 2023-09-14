import { Router } from "express";
import { TaskController } from "../controllers/task.controller";
const routes = Router();

routes.get('/' , TaskController.getall)
routes.post('/create' , TaskController.create)
routes.get('/find/:category' , TaskController.findbycategory)
routes.delete('/delete/:id/:userid' , TaskController.delete)
routes.patch('/update/:id/:userid', TaskController.update)

export default routes