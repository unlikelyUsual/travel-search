import mongoose from "mongoose";

const tripSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  duration: Number,
  destination: String,
  interest: String,
  travelers: Number,
  budgetPerPerson: String,
  when: String,
  stage: String,
});

const Trip = mongoose.model("Trip", tripSchema);

export default Trip;
