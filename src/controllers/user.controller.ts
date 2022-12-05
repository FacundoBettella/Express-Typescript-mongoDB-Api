import { NextFunction, Request, Response } from 'express';
import { UserService } from '../services/user.service';

const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.params.id;
    const user = await UserService.getById(userId);

    if (user === null) {
      throw new Error();
    }

    res.send(user);
  } catch (error) {
    next(error);
  }
};

const getUsers = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await UserService.get();
    res.send(users);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.params.id;
    const changes = req.body;
    const response = await UserService.update(userId, changes);
    res.send(response);
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.params.id;
    const deletedItem = await UserService.delete(userId);

    res.send({
      item_deleted: deletedItem === null ? 'wrong user_id' : deletedItem,
    });
  } catch (error) {
    next(error);
  }
};

export { getUsers, getUser, updateUser, deleteUser };
