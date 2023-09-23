import { Router } from "express";
import { userController } from "../controllers/user.controller";
const routes = Router();
import multer from 'multer'
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, './src/uploads'); // The folder where uploaded files will be stored
    },
    filename: (req, file, callback) => {
      callback(null, Date.now() + '-' + file.originalname); // Naming the file
    },
  });
  
  const upload = multer({ storage: storage });
  

routes.get('/' , userController.getall )
routes.post('/login' , userController.login)
routes.post('/signup' , upload.any(), userController.signup)
routes.get('/user/:id', userController.finduserbyid)
routes.patch('/update/:id', userController.updateUserById)
routes.delete('/delete/:id', userController.deleteUserById)
export default routes