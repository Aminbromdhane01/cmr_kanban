import prisma from "../services/prisma";
import { Request, Response} from "express";


export const UpdatedTaskController = {
    async getbyTaskID(req : Request, res : Response){
        const taskid = parseInt(req.params.taskid);

        try {
            const response = await prisma.taskHistory.findMany({where  : {Taskid : taskid}})
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({error : error})        }
    }
 


}