import express, { Application, Request, Response } from "express";
import cors from "cors";
const app: Application = express();

// Parser or Middleware
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Courier and Parcel Management System! 😊");
});

export default app;
