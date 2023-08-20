import express, { query } from "express";
import Logger from "../config/logger";
import HTTP_STATUS from "../helper/http";
import Trip from "../models/trip";

const logger = new Logger("Trip Router");
const router = express.Router();

interface IResponseType {
  message: string;
  data?: object;
}

router.post(``, (req, res) => {});

router.get(`/trips`, async (req, res) => {
  logger.log(`Fetch trips invoked`, req.query);
  try {
    const trips = await Trip.find({});

    logger.log(`Total trips fetched`, trips.length);

    const response: IResponseType = {
      message: `Fetched`,
      data: {
        trips,
      },
    };

    return res.json(response);
  } catch (error) {
    logger.error(error.message, error);
    return res.status(HTTP_STATUS.ISE).json({ message: "Something went wrong" });
  }
});
