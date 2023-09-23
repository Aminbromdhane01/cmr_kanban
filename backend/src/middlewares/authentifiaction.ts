import { Request, Response, NextFunction } from 'express';
import jwt, { VerifyErrors } from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      user?: UserPayload;
    }
  }
}


interface UserPayload {
  id: number;
  email: string;
  isAdmin: boolean;
}

const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    const user = decoded as UserPayload;
    req.user = user;
    return next();
  } catch (error) {
    console.error(error);
    return res.status(403).json({ message: 'Token verification failed' });
  }
};

export default authenticateToken;
