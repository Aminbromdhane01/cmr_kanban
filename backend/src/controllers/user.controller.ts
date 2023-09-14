
import { Request, Response,} from "express";
import bcrypt from 'bcrypt';

import prisma from "../services/prisma";
import jwt from 'jsonwebtoken';
interface JwtPayload {
    user: {
      id: number;
      email: string;
    };
  }
  interface User {
    username: string;
    email: string;
    pwd: string;
    picture :string
    productionLine : string
    isAdmin : boolean
    isActive : boolean
  }

export const userController = {
  async getall (req : Request , res : Response){
    const users = await prisma.user.findMany();
    return res.json(users)
  },
  async  login(req : Request, res : Response) {
    const { email, pwd } = req.body;
  
    try {
      const user = await prisma.user.findUnique({ where: { email } });
  
      if (!user) {
        console.log('user not found');
        
        return res.status(404).json({ message: 'Invalid credentials' });
        
      }
  
      const isPasswordValid = await bcrypt.compare(pwd, user.pwd);
  
      if (!isPasswordValid) {
        console.log('wrong pass');
        
        return res.status(404).json({ message: 'Invalid credentials' });
      }
  
      const payload = {
        user: {
          id: user.id,
          email: user.email,
        },
      };
  
      const token = jwt.sign(payload, process.env.JWT_SECRET as string);
  
      res.status(200).json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  
  
  async signup(req : Request, res : Response)
  {
    interface User {
        username: string;
        email: string;
        pwd: string;
        picture :string
        productionLine : string
        isAdmin : boolean
        isActive : boolean
      }
    try {
        const { username, email, pwd , picture , productionLine ,isAdmin } = req.body ;
    
        // Check if the user already exists
        const existingUser = await prisma.user.findUnique({ where: { email} });
        if (existingUser) {
          return res.status(400).json({ message: 'User already exists' });
        }
    
        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(pwd, 10);
    
        // Create a new user in the database
        const newUser = await prisma.user.create({
          data: {
            username,
            email,
            pwd: hashedPassword,
            picture,
            productionLine,
            isAdmin
          },
        });
    
        res.status(201).json({ message: 'User registered successfully', user: newUser });
      } catch (error) {
        console.error('Error during sign-up:', error);
        res.status(500).json({ message: 'An error occurred during sign-up' });
      }
  },
  async finduserbyid(req: Request, res: Response){
   
    const id = parseInt(req.params.id) ;
   
  try {
    const user = await prisma.user.findUnique({where: {id}})
    if(!user)
    { 
      res.status(404).json("User not found")
    }
    else {
    res.status(200).json(user)
    }
  } catch (error) {
    res.status(500).json({error: error})
    
  }

  } ,

  async updateUserById(req : Request, res : Response) {
    const id = parseInt(req.params.id);
    const newData : User = req.body; 
  
    try {
      const user = await prisma.user.findUnique({ where: { id } });
  
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      if (newData.pwd) {
        const hashedPassword = await bcrypt.hash(newData.pwd, 10);
        newData.pwd = hashedPassword;
      }
    
      const updatedUser = await prisma.user.update({ where: { id }, data: newData });
  
      return res.status(200).json({ user: updatedUser });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  },
  async  deleteUserById(req : Request, res : Response) {
    const id = parseInt(req.params.id);
  
    try {
      const user = await prisma.user.findUnique({ where: { id } });
  
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
     
      await prisma.user.delete({ where: { id } });
  
      return res.status(204).end();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
  
  

  
  
}