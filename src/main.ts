import express, { Express, Request, Response } from "express";

const PORT = 3000;
const app: Express = express();

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
