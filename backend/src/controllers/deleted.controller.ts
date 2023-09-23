import prisma from "../services/prisma";
import { Request, Response} from "express";


 export const DeletedTaskController = {
    async getall(req : Request, res : Response){

        try {
            if (!req.user?.isAdmin)
            {
            
                
                return res.status(403).json({ message: 'Access denied' });            }
            const response = await prisma.deletedTask.findMany();
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({error : error})        }
    },
    async count(req : Request, res : Response){
        try {
            const NumberTasks =  await prisma.deletedTask.count();
            res.status(200).json({count : NumberTasks})
        } catch (error) {
            res.status(500).json({error : error}) 
        }
    }
 


}