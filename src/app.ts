import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
const app: Application = express();

// Parser or Middleware
app.use(express.json());
app.use(cors({ origin: ['http://localhost:5173'] }));

// Application Route
app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Courier and Parcel Management System! 😊');
});

// Not Found route
app.use(notFound);

// Global Error Handler
app.use(globalErrorHandler);

export default app;
