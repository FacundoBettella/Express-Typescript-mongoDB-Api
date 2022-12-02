import { Router } from 'express';
import {
  getItem,
  getItems,
  postItem,
  deleteItem,
  updateItem,
} from '../controllers/item.controller';

const itemRouter = Router();

itemRouter.get('/:id', getItem);

itemRouter.put('/:id', updateItem);

itemRouter.delete('/:id', deleteItem);

itemRouter.post('/', postItem);

itemRouter.get('/', getItems);

export default itemRouter;
