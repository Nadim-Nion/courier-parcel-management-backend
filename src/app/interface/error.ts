export type TError = {
  details: {
    path: string | number;
    message: string;
  };
};

export type TGenericErrorResponse = {
  statusCode: number;
  message: string;
  error: TError;
};
