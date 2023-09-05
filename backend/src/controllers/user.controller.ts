
import { Request, Response } from "express";
import bcrypt from 'bcrypt';

import prisma from "../services/prisma";
import jwt from 'jsonwebtoken';
interface JwtPayload {
    user: {
      id: number;
      email: string;
    };
  }

export const userController = {
  async getall (req : Request , res : Response){
    const users = await prisma.user.findMany();
    return res.json(users)
  },
  async login (req : Request , res : Response){
    const { email, pwd } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || user.pwd !== pwd) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
    
  
      const payload: JwtPayload = {
        user: {
          id: user.id,
          email: user.email,
        },
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET as string);
      res.status(200).json({ token });
  } ,
  
  
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
  }
  
  
}