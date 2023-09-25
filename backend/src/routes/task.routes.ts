import { Router } from "express";
import { TaskController } from "../controllers/task.controller";
import authenticateToken from "../middlewares/authentifiaction";
const routes = Router();

routes.get('/' , TaskController.getall)
routes.post('/create' ,authenticateToken, TaskController.create)
routes.get('/find/:category' , TaskController.findbycategory)
routes.delete('/delete/:id', authenticateToken , TaskController.delete)
routes.patch('/update/:id', authenticateToken, TaskController.update)

export default routes