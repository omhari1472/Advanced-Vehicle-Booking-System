import mongoose from "mongoose";

const carSchema = new mongoose.Schema(
  {
    carName: {
      type: String,
      required: true,
    },
    seats: {
      type: Number,
      required: true,
    },
    luggage: {
      type: Number,
      required: true,
    },
    doors: {
      type: Number,
      required: true,
    },
    fuel: {
      type: String,
      required: true,
    },
    horsepower: {
      type: Number,
      required: true,
    },
    engine: {
      type: Number,
      required: true,
    },
    drive: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    availability: {
      type: Number,
    }, // Total available units
    bookings: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Car = mongoose.model("Car", carSchema);

export default Car;
