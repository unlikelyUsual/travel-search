import express, { Express } from "express";
import dotenv from "dotenv";
import Database from "./config/database";
import tripRoute from "./routes/trip";
import cors from "cors";

dotenv.config({ debug: true });

const port = process.env.SERVER_PORT;

new Database();

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use("/", tripRoute);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
