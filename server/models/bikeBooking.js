import mongoose from 'mongoose';

const bikeBookingSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true
  },
  pickupDateTime: {
    type: Date,
    required: true
  },
  dropOffDateTime: {
    type: Date,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

const BikeBooking = mongoose.model('BikeBooking', bikeBookingSchema);

export default BikeBooking;
