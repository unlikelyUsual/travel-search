import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config({ debug: true });

const port = process.env.SERVER_PORT;

const app: Express = express();

app.use(express.json());

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
