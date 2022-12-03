import { NextFunction, Request, Response } from 'express';
import { loginUser, registerNewUser } from '../services/auth.service';

const registerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = req.body;
    const newUser = await registerNewUser(user);
    res.status(201).json({ user: newUser });
  } catch (error) {
    next(error);
  }
};

const loginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = req.body;
    console.log(user);

    const logedUser = await loginUser(user);

    res.status(200).json(logedUser);
  } catch (error) {
    next(error);
  }
};

export { loginController, registerController };
