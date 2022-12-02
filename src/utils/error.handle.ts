import { Response } from 'express';

export const handleHttpErr = (res: Response, error: string, errorRaw?: unknown) => {
  console.log(error, errorRaw);

  res.status(500);
  res.send({ error, errorRaw });
};
