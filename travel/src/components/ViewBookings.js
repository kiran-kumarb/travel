import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/ViewBookings.css';

const ViewBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/bookings'); // Update endpoint if necessary
        console.log(response);
        setBookings(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch bookings');
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const handleCancel = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/bookings/${id}`); // Update endpoint if necessary
      setBookings((prev) => prev.filter((booking) => booking._id !== id)); // Update state after deletion
    } catch (err) {
      alert('Failed to cancel the booking. Please try again.');
    }
  };

  if (loading) {
    return <p>Loading bookings...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <div className="view-bookings">
      <h2>Recent Bookings</h2>
      {bookings.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Payment Status</th>
              <th>Booking Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <td>{booking.name}</td>
                <td>{booking.email || 'N/A'}</td>
                <td>{new Date(booking.travelDate).toLocaleDateString()}</td>
                <td>{booking.status}</td>
                <td>{new Date(booking.createdAt).toLocaleDateString()}</td>
                <td>
                  <button
                    className="cancel-btn"
                    onClick={() => handleCancel(booking._id)}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No bookings found.</p>
      )}
    </div>
  );
};

export default ViewBookings;


