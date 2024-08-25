import type { NextFunction, Request, Response } from 'express';
import { RequestError } from '../error/request-error';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof RequestError) {
    const { statusCode, errors, logging } = err;
    if (logging) {
      console.error(
        JSON.stringify(
          {
            code: err.statusCode,
            errors: err.errors,
            stack: err.stack,
          },
          null,
          2
        )
      );
    }

    return res.status(statusCode).send({ errors });
  }

  console.error(err);
  return res
    .status(500)
    .send({ errors: [{ message: 'Something went wrong' }] });
};
