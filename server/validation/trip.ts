import isEmptyCheck from "../utils/isEmpty";
import Validator from "validator";

export interface IAddTrip {
  name: string;
  email: string;
  phone: string;
  duration?: Number;
  destination?: String;
  interest?: String;
  travelers?: Number;
  budgetPerPerson?: String;
  when?: String;
  stage?: String;
}

export const addTripValidation = (data: IAddTrip): { errors: Partial<IAddTrip>; isValid: boolean } => {
  const { name, email, phone } = data;

  const errors: Partial<IAddTrip> = {};

  if (Validator.isEmpty(name)) {
    errors.name = "User Name Is Required";
  }

  if (!Validator.isLength(name, { min: 2, max: 50 })) {
    errors.name = "User Name Should Be Between 2 To 50 Characters";
  }

  if (Validator.isEmpty(email)) {
    errors.email = "User Email Is Required";
  }

  if (!Validator.isEmail(email)) {
    errors.email = "User Email Is Invalid";
  }

  if (Validator.isEmpty(phone)) {
    errors.phone = "Phone Number Is Required";
  }

  return {
    errors,
    isValid: isEmptyCheck(errors),
  };
};
