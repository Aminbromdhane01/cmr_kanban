import { Request, Response} from "express";
import prisma from "../services/prisma";

export const TaskController = {

    async getall(req : Request , res : Response)
    {
       try {
                   
        const Tasks = await prisma.task.findMany();
        return res.status(200).json(Tasks)
          
       } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
       }
    },
    async create (req : Request, res : Response){
       interface Task {
        content : string ,
        piriority : string ,
        category : string ,
        stage : string ,
        enddate : string ,
        authorId : number
       }
       const data : Task = req.body
       console.log(data);
       
       try {
        const CreatedTask = await prisma.task.create({data})
         await prisma.taskHistory.create({data : {
         Taskid : CreatedTask.id,
         content: CreatedTask.content,
         priority : CreatedTask.priority,
         category : CreatedTask.category,
         stage : CreatedTask.stage,
         orderdate :CreatedTask.orderdate,
         updatedby :CreatedTask.authorId
        }})
        res.status(201).json({message : 'Task created successfully' , createdTask: CreatedTask})
       } catch (error) {
        console.log(error);
        
        res.status(500).json({ error: 'Internal Server Error'});
       }
       
    },
    async findbycategory(req : Request, res : Response){
         const category = req.params.category
         try {
            if (category === 'all'){
                const data = await prisma.task.findMany();
                res.status(200).json(data)            
    
            }
            else{
               const filtredData = await prisma.task.findMany({where : { category: category}})
               res.status(200).json(filtredData)
            }
           
         } catch (error) {
            res.status(500).json({ error : error});
         }
    
         
    },
    async delete(req : Request, res : Response)
    {
      const  id = parseInt( req.params.id)
      const user_id = parseInt(req.params.userid);
      try {
         const target = await prisma.task.findUnique({where : { id: id}})
         if (!target) {
            res.status(404).json({ message : "Task not found"});
         }
         else{
            const ArchiveTask = await prisma.deletedTask.create({
               data: {
                 Taskid: target.id,
                 content: target.content,
                 priority : target.priority,
                 category : target.category,
                 stage : target.stage,
                 orderdate :target.orderdate,
                 deletedby :user_id
                 
                 
               },
             });
             console.log(ArchiveTask);
             
         
            const deletedTask = await prisma.task.delete({ where: { id: id}})
          
            res.status(200).json({ task :deletedTask , message : "Task deleted "})
         }
         
      } catch (error) {
         res.status(500).json({ error : error})
      }

     



},
async update(req : Request, res : Response){
   
  const id = parseInt( req.params.id) ;
  const user_id = parseInt(req.params.userid);
  let data = req.body
  try {
   const target = await prisma.task.findUnique({where : { id: id}})
   if (!target){
      res.status(404).json({ message : "Task not found"});

   }
   else{
      const UpdatedTask = await prisma.task.update({where : {id} , data : data})
      const update = await prisma.taskHistory.create({
         data : {
          Taskid : UpdatedTask.id,
          content: target.content,
          priority : target.priority,
          category : target.category,
          stage : target.stage,
          orderdate :target.orderdate,
          updatedby :user_id

         }
      })
      res.status(200).json({task :UpdatedTask , message : "Task updated"})
   }
 

  } catch (error) {
   res.status(500).json({error : error})
  }

     
}


}