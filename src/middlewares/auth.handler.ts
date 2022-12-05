import { Request, Response, NextFunction } from 'express';
import Boom from 'boom';

const API_KEY = process.env['API_KEY'] || '';

function checkApiKey(req: Request, _res: Response, next: NextFunction) {
  const apiKey = req.headers['api-key'];
  if (apiKey === API_KEY) {
    next();
  } else {
    next(Boom.unauthorized('Unauthorized'));
  }
}

export { checkApiKey };
