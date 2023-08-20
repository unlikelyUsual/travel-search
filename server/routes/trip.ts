import express, { query } from "express";
import Logger from "../config/logger";
import HTTP_STATUS from "../helper/http";
import Trip from "../models/trip";
import { addTripValidation } from "../validation/trip";

const logger = new Logger("Trip Router");
const router = express.Router();

interface IResponseType {
  message: string;
  data?: object;
}

router.post(`/trip`, async (req, res) => {
  logger.log(`Add Trip invoked`, req.body);
  try {
    const { isValid, errors } = addTripValidation(req.body);

    if (!isValid) return res.status(HTTP_STATUS.BAD).json({ message: "Invalid request", errors });

    const trip = await new Trip(req.body).save();

    const response: IResponseType = {
      message: `Fetched`,
      data: {
        trip,
      },
    };

    return res.json(response);
  } catch (err) {
    logger.error(err.message, err);
    return res.status(HTTP_STATUS.ISE).json({ message: "Something went wrong" });
  }
});

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

export default router;
