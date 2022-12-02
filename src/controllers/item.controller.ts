/* Cambiar a class */
import { NextFunction, Request, Response } from 'express';
import {
  findItemService,
  findItemsService,
  insertItemService,
  updateItemService,
  deleteItemService,
} from '../services/item.service';
// import { handleHttpErr } from '../utils/error.handle';

const getItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const itemId = req.params.id;
    const item = await findItemService(itemId);

    if (item === null) {
      throw new Error();
    }

    res.send(item);
  } catch (error) {
    next(error);
  }
};

const getItems = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await findItemsService();
    res.send(items);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const postItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newItem = req.body;
    const response = await insertItemService(newItem);
    res.send(response);
  } catch (error) {
    next(error);
  }
};

const updateItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const itemId = req.params.id;
    const updateItem = req.body;
    const response = await updateItemService(itemId, updateItem);
    res.send(response);
  } catch (error) {
    next(error);
  }
};

const deleteItem = async (req: Request, res: Response, next: NextFunction) => {
  const itemId = req.params.id;
  const deletedItem = await deleteItemService(itemId);

  res.send({
    item_deleted: deletedItem === null ? 'wrong item_id' : deletedItem
  });

  try {
  } catch (error) {
    next(error);
  }
};

export { getItem, getItems, postItem, updateItem, deleteItem };
