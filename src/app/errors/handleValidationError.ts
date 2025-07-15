import mongoose from 'mongoose';
import { TError, TGenericErrorResponse } from '../interface/error';

const handleValidationError = (
  err: mongoose.Error.ValidationError,
): TGenericErrorResponse => {
  // formatting the error in consistent pattern
  const errorObj: mongoose.Error.ValidatorError | mongoose.Error.CastError =
    err.errors.name;

  const error: TError = {
    details: {
      path: errorObj?.path,
      message: errorObj?.message,
    },
  };

  const statusCode = 400;

  return {
    statusCode,
    message: 'Validation Error',
    error,
  };
};

export default handleValidationError;