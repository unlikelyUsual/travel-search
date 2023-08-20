import mongoose from "mongoose";

const server = process.env.DB_URL;
const database = process.env.DB_NAME;
class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose
      .connect(`mongodb://${server}/${database}`)
      .then(() => {
        console.log("Database connection successful");
      })
      .catch((err) => {
        console.error("Database connection failed");
      });
  }
}

module.exports = new Database();
