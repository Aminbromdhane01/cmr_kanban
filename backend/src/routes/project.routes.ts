import { Router } from "express";
import { ProjectController } from "../controllers/project.controller";
const routes = Router();

routes.get('/' , ProjectController.getall)
routes.post('/create' , ProjectController.create)
routes.get('/findbyId/:id' , ProjectController.findById)
routes.delete('/delete/:id' , ProjectController.delete)
routes.patch('/update/:id', ProjectController.update)

export default routes
