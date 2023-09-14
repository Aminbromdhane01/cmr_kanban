import { Router } from "express";
import { userController } from "../controllers/user.controller";
const routes = Router();

routes.get('/' , userController.getall )
routes.post('/login' , userController.login)
routes.post('/signup' , userController.signup)
routes.get('/user/:id', userController.finduserbyid)
routes.patch('/update/:id', userController.updateUserById)
routes.delete('/delete/:id', userController.deleteUserById)
export default routes