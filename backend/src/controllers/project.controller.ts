import prisma from "../services/prisma";
import { Request, Response} from "express";

export const  ProjectController = {

    async getall(req :Request , res :Response){

        try {
          const Projects = await prisma.project.findMany()
          res.status(200).json(Projects)
            
        } catch (error) {
           res.status(500).json({error :error})

        }

    },

    async create (req :Request , res :Response){
         
        interface Project{
            Name : string
            ClientName : string
            ProductionUnit : string
        }
         const data : Project= req.body 
        try {
            const createdProject = await prisma.project.create({data})
            res.status(201).json({message : 'Project created successfully' , createdProject: createdProject})
        } catch (error) {
            res.status(500).json({error :error})

        }
    },
    async findById (req :Request , res :Response){
         
     const id = parseInt(req.params.id)
     try {
       const Project = await prisma.project.findUnique({where: {id}})
       res.status(200).json(Project)
        
     } catch (error) {
        res.status(500).json({error :error})

     } 

    },

    async delete (req :Request , res :Response){
        const id = parseInt(req.params.id)

        try {
            const ToDelete = await prisma.project.findUnique({where: {id}})
            if (!ToDelete)
            {
                res.status(404).json({error : "Project not found"})
            }
            else {
               const DeletedProject = await prisma.project.delete({where : {id}})
               res.status(200).json({success :DeletedProject})
            }
            
        } catch (error) {
            res.status(500).json({error :error})

        }
    },
    async update (req :Request , res :Response){
        const id = parseInt(req.params.id)
        const data = req.body
        try {
            const ToUpdate = await prisma.project.findUnique({where: {id}})
            if (!ToUpdate)
            {
                res.status(404).json({error : "Project not found"})
            }
            else {
               const UpdatedProject = await prisma.project.update({where : {id} , data :data})
               res.status(200).json({success :UpdatedProject})
            }
            
        } catch (error) {
            res.status(500).json({error :error})

        }

    }



}