// bookingController.js

const Booking = require('../models/Booking'); // Assuming you have a Booking model

// Create a new booking
exports.createBooking = async (req, res) => {
  try {
    const { name, phone, address, modeOfTransport, destination, price } = req.body;
    
    if (!name || !phone || !address || !modeOfTransport || !destination || !price) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const booking = new Booking({
      name,
      phone,
      address,
      modeOfTransport,
      destination,
      price,
    });

    const savedBooking = await booking.save();
    res.status(201).json(savedBooking);
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ message: 'Failed to create booking' });
  }
};
