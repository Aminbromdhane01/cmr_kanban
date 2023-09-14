import express from "express"
import { deletedtaskRoutes, taskRoutes, updatedtaskRoutes, userRoutes } from "./routes";
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const cors = require("cors");
class App  {
    public server ;

    constructor(){
        this.server = express() ;
        this.middlewares();
        this.routes();
        this.prismaEvents();

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
    }
    prismaEvents(){
        prisma.$on('beforeDelete', async ({ model , where } : any) => {
            if (model === 'Task') {
                console.log('hello world');
                
              const taskToDelete = await prisma.task.findUnique({ where });
          
              await prisma.taskclone.create({
                data: {
                    Taskid: taskToDelete.id,
                    content: taskToDelete.content,
                    priority: taskToDelete.piriority,
                    category:taskToDelete.category,
                    stage:taskToDelete.stage,
                    orderdate:taskToDelete.orderdate,
                    enddate : taskToDelete.enddate,

                },
              });
            }
          });
    }

}

export default new App().server