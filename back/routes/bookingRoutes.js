const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

router.get('/recent', async (req, res) => {
    try {
      // Fetch the most recent 10 successful bookings
      const recentBookings = await Booking.find({ status: 'successful' }) // Filter only successful bookings
        .sort({ travelDate: -1 }) // Sort by travel date in descending order
        .limit(10); // Limit to 10 results
  
      if (recentBookings.length === 0) {
        return res.status(404).json({ message: 'No recent bookings found.' });
      }
  
      res.json(recentBookings);
    } catch (error) {
      console.error('Error fetching recent bookings:', error);
      res.status(500).json({ message: 'Server error. Could not fetch recent bookings.' });
    }
  });





// Create a booking
router.post('/', async (req, res) => {
  try {
    const booking = new Booking(req.body);
    const savedBooking = await booking.save();
    res.status(201).json(savedBooking);  // Return saved booking data as response
  } catch (error) {
    res.status(400).json({ message: error.message });  // Handle validation errors
  }
});

// Get all bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);  // Return all bookings
  } catch (error) {
    res.status(500).json({ message: error.message });  // Handle internal server errors
  }
});

router.get('/api/destinations/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch bookings' });
  }
});



// Delete a booking
router.delete('/:id', async (req, res) => {
  try {
    const deletedBooking = await Booking.findByIdAndDelete(req.params.id);
    if (!deletedBooking) return res.status(404).json({ message: 'Booking not found' });  // Handle non-existent booking
    res.status(200).json({ message: 'Booking cancelled successfully' });  // Return success message
  } catch (error) {
    res.status(500).json({ message: error.message });  // Handle internal server errors
  }
});




router.get('/api/destinations/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find(); // Fetch all bookings
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch bookings' });
  }
});




router.delete('/api/bookings/:id', async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.json({ message: 'Booking cancelled successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to cancel booking' });
  }
});

module.exports = router;

