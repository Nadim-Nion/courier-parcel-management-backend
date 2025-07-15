import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
const app: Application = express();

// Parser or Middleware
app.use(express.json());
app.use(cors({ origin: ['http://localhost:5173'] }));

// Application Route
app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Courier and Parcel Management System! 😊');
});

export default app;
