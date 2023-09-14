import prisma from "../services/prisma";
import { Request, Response} from "express";


 export const DeletedTaskController = {
    async getall(req : Request, res : Response){

        try {
            const response = await prisma.deletedTask.findMany();
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({error : error})        }
    }
 


}