import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
