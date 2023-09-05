import express from "express"
import { userRoutes } from "./routes";
const cors = require("cors");
class App  {
    public server ;

    constructor(){
        this.server = express() ;
        this.middlewares();
        this.routes();

    }
    middlewares(){
        this.server.use(express.json());
        this.server.use(cors( 
        ))
    }
    routes(){
        this.server.use('/api/users',userRoutes);
    }

}

export default new App().server