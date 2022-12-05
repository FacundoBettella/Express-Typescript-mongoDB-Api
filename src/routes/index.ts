import { Router, Express } from 'express';
import authRouter from './auth.route';
import itemRouter from './item.route';
import userRouter from './user.route';

export function routerApi(app: Express) {
  const router = Router();
  app.use('/api/v1', router);

  router.use('/auth', authRouter);
  router.use('/users', userRouter);
  router.use('/items', itemRouter);
}
