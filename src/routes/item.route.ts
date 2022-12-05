import { Router } from 'express';
import passport from 'passport';
import {
  getItem,
  getItems,
  postItem,
  deleteItem,
  updateItem,
} from '../controllers/item.controller';
import { checkApiKey } from '../middlewares/auth.handler';

const itemRouter = Router();

itemRouter.get('/:id', getItem);

itemRouter.put(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkApiKey,
  updateItem
);

itemRouter.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkApiKey,
  deleteItem
);

itemRouter.post('/', checkApiKey, postItem);

itemRouter.get('/', getItems);

export default itemRouter;
