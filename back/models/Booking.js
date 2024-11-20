const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  travelMode: { type: String, required: true }, // e.g., Flight, Train, Bus
  travelDate: { type: Date, required: true },
  destination: { type: String, required: true }, // e.g., Paris
  price: { type: Number, required: true },
  status: { type: String, default: 'pending' }, // e.g., 'successful', 'cancelled'
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Booking', BookingSchema);
