import { NextFunction, Request, Response } from 'express';
import { ItemService } from '../services/item.service';

const getItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const itemId = req.params.id;
    const item = await ItemService.findItemService(itemId);

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
    const items = await ItemService.findItemsService();
    res.send(items);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const postItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newItem = req.body;
    const response = await ItemService.insertItemService(newItem);
    res.send(response);
  } catch (error) {
    next(error);
  }
};

const updateItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const itemId = req.params.id;
    console.log(itemId);

    const updateItem = req.body;

    const response = await ItemService.updateItemService(itemId, updateItem);
    res.send(response);
  } catch (error) {
    next(error);
  }
};

const deleteItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const itemId = req.params.id;
    const deletedItem = await ItemService.deleteItemService(itemId);

    res.send({
      item_deleted: deletedItem === null ? 'wrong item_id' : deletedItem,
    });
  } catch (error) {
    next(error);
  }
};

export { getItem, getItems, postItem, updateItem, deleteItem };
