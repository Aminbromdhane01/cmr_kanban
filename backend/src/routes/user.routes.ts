import { Router } from "express";
import { userController } from "../controllers/user.controller";
const routes = Router();

routes.get('/' , userController.getall )
routes.post('/login' , userController.login)
routes.post('/signup' , userController.signup)

export default routes