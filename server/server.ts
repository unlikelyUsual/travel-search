import express, { Express } from "express";
import dotenv from "dotenv";
import Database from "./config/database";
import tripRoute from "./routes/trip";
import cors from "cors";
import path from "path";

dotenv.config({ debug: true });

const port = 4000 || process.env.PORT;

new Database();

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use("/", tripRoute);

if (process.env.NODE_ENV === "prod") {
  app.use(express.static("../client/build"));

  app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, "..", "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
