import { Router, Express } from 'express';
import authRouter from './auth.route';
import itemRouter from './item.route';
import blogRouter from './blogs.route';

export function routerApi(app: Express) {
  const router = Router();
  app.use('/api/v1', router);

  router.use('/auth', authRouter);
  router.use('/items', itemRouter);
  router.use('/blogs', blogRouter);
}
