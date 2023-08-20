import mongoose from "mongoose";
import Logger from "./logger";

class Database {
  private readonly logger = new Logger(`Database`);
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose
      .connect(process.env.DB_URL ?? "")
      .then(() => {
        console.log("Database connection successful");
      })
      .catch((err) => {
        this.logger.error(err.message, err);
        console.error("Database connection failed");
      });
  }
}

export default Database;
