import { Router, Express } from 'express';
import blogRouter from './blogs.route';
import itemRouter from './item.route';

export function routerApi(app: Express) {
  const router = Router();
  app.use('/api/v1', router);

  router.use('/items', itemRouter);
  router.use('/blogs', blogRouter);
}
