import { ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
};

const boomErrorHandler: ErrorRequestHandler = (err, _req, res, next) => {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
};

export { errorHandler, boomErrorHandler };
