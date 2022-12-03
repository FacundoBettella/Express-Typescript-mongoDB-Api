import { NextFunction, Request, Response } from 'express';
import { registerNewUser } from '../services/auth.service';
import jwt from 'jsonwebtoken';

const JWT = process.env['JWT_SECRET'] || '';

const registerController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.body;
    const newUser = await registerNewUser(user);
    res.status(201).json({ user: newUser })
  } catch (error) {
    next(error);
  }
}


const loginController = () => {
  async (req: Request, res: Response, _next: NextFunction) => {
    try {
      const user = req.body;

      const payload = {
        sub: user.id,
        role: user.role,
      };

      const token = jwt.sign(payload, JWT);
      res.json({ user, access_token: token });
    } catch (error) {}
  }
}


export { loginController, registerController }
