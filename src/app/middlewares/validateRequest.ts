import { NextFunction, Request, Response } from 'express';
import { ZodObject } from 'zod';
import { catchAsync } from '../utils/catchAsync';

const validateRequest = (schema: ZodObject) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // Validate data before going to the controller
    await schema.parseAsync({
      body: req.body,
    });
    next();
  });
};

export default validateRequest;
