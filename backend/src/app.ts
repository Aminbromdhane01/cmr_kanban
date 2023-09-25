import express from "express"
import { deletedtaskRoutes, projectRoutes, taskRoutes, updatedtaskRoutes, userRoutes } from "./routes";


const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
async function updateTaskPriorities() {
    try {
        const tasks = await prisma.task.findMany();

        const currentDate = new Date() as any;
    
        for (const task of tasks) {
            
          const daysUntilDeadline = Math.ceil((task.enddate  - currentDate ) / (1000 * 60 * 60 * 24));
    
          let updatedPriority;
    
          if (daysUntilDeadline <= 1) {
            updatedPriority = 'URGENT';
          } else if (daysUntilDeadline <= 3) {
            updatedPriority = 'HIGH';
          } else if (daysUntilDeadline <= 6) {
            updatedPriority = 'NORMAL';
          }
    
        
          await prisma.task.update({
            where: { id: task.id },
            data: { priority: updatedPriority },
          });
    
         
        }
    
        
  
    
    } catch (error) {
      console.error('Error updating task priorities:', error);
    }
  }
  
const cors = require("cors");
class App  {
    public server ;

    constructor(){
        this.server = express() ;
        this.middlewares();
        this.routes();
        this.checkpiriority();
        

    }
    middlewares(){
        this.server.use(express.json());
        this.server.use(cors( 
        ))
       
    }
    routes(){
        this.server.use('/api/users',userRoutes);
        this.server.use('/api/tasks',taskRoutes)
        this.server.use('/api/deletedtask',deletedtaskRoutes)
        this.server.use('/api/updatedtask',updatedtaskRoutes)
        this.server.use('/api/projects',projectRoutes)
        this.server.use('/api/images',express.static('./src/uploads') )
    }
    checkpiriority(){
        const intervalInMilliseconds = 24 * 60 * 60 * 1000;
        updateTaskPriorities(); // 
        setTimeout(this.checkpiriority, intervalInMilliseconds);

    }
   

}

export default new App().server