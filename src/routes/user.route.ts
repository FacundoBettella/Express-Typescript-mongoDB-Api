import { Router } from 'express';
import {
  getUser,
  getUsers,
  deleteUser,
  updateUser,
} from '../controllers/user.controller';
import { checkApiKey } from '../middlewares/auth.handler';

const userRouter = Router();

userRouter.get('/', getUsers);

userRouter.get('/:id', getUser);

userRouter.put('/:id', checkApiKey, updateUser);

userRouter.delete('/:id', checkApiKey, deleteUser);

export default userRouter;
