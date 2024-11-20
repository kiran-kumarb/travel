import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios'; // Import axios to make HTTP requests
import '../styles/BookingForm.css'; // Import the newly created styles

const BookingForm = () => {
  const { state: destination } = useLocation(); // Get the destination details passed via navigate
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [modeOfTransport, setModeOfTransport] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Utility function to check if the selected date is valid (future date)
  const isDateValid = (date) => {
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set to midnight to only compare dates
    return selectedDate >= today; // Return true if the selected date is today or later
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form fields
    if (!name || !phone || !address || !modeOfTransport || !travelDate) {
      setError('All fields are required!');
      return;
    }

    // Validate travel date
    if (!isDateValid(travelDate)) {
      setError('Please select a valid travel date (today or in the future).');
      return;
    }

    // Prepare the booking details with the correct field names
    const bookingDetails = {
      name,        
      phone,
      address,
      travelMode: modeOfTransport,  // Use 'travelMode' instead of 'modeOfTransport'
      travelDate,                   // Ensure 'travelDate' is provided
      destination: destination.name,
      price: destination.price,
    };

    console.log('Booking Details:', bookingDetails);
    try {
      // Send POST request to backend to save the booking details
      const response = await axios.post('http://localhost:5000/api/bookings', bookingDetails);
      console.log('Booking successful:', response.data);
      
      // Clear form fields and show success message
      setMessage('Your booking was successful! We will notify you soon.');
      setError('');
      setName('');
      setPhone('');
      setAddress('');
      setTravelDate('');
      setModeOfTransport('');
    } catch (err) {
      console.error('Error booking trip:', err);
      setError('Failed to book. Please try again.');
    }
  };

  return (
    <div className="booking-form">
      <h2>Book Your Trip to {destination.name}</h2>
      <form onSubmit={handleSubmit}>
        {error && <p className="error-message">{error}</p>}
        {message && <p className="success-message">{message}</p>}

        <div className="form-group">
          <div className="form-group-item">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group-item">
            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <div className="form-group-item">
            <label>Address</label>
            <textarea
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="form-group-item">
            <label>Travel Date</label>
            <input
              type="date"
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}  // Handle date change
            />
          </div>

          <div className="form-group-item">
            <label>Mode of Transport</label>
            <select
              value={modeOfTransport}
              onChange={(e) => setModeOfTransport(e.target.value)}
            >
              <option value="">Select Transport</option>
              <option value="Flight">Flight</option>
              <option value="Train">Train</option>
              <option value="Bus"></option>
            </select>
          </div>
        </div>

        <button type="submit">Book Now</button>
        <button type="button" className="cancel-btn" onClick={() => window.history.back()}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
