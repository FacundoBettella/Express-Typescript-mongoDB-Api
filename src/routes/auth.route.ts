import { Router } from 'express';
import {
  registerController,
  loginController,
} from '../controllers/auth.constroller';

const authRouter = Router();

authRouter.post('/register', registerController);

authRouter.post('/login', loginController);

export default authRouter;
