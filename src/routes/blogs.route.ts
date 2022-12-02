import { Request, Response, Router } from 'express';

const blogRouter = Router();

blogRouter.get('/', (_req: Request, res: Response) => {
  res.send({ data: 'Aqui van los Blogs' });
});

export default blogRouter;
