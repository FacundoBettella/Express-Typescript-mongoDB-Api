/* Cambiar a class */
import { Request, Response } from 'express';
import { handleHttpErr } from '../utils/error.handle';

const getBlog = (_req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttpErr(res, 'ERROR_GET_BLOGS');
  }
};

const getBlogs = (_req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttpErr(res, 'ERROR_GET_BLOGS');
  }
};

const postBlog = (req: Request, res: Response) => {
  try {
    const newBlogs = req.body;
    res.send(newBlogs);
  } catch (e) {
    handleHttpErr(res, 'ERROR_CREATE_BLOGS');
  }
};

const deleteBlog = (_req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttpErr(res, 'ERROR_DELETE_BLOGS');
  }
};

export { getBlog, getBlogs, postBlog, deleteBlog };
