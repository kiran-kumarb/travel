import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // to get the ID from the URL
import destinationService from '../services/destinationService';
import '../styles/DestinationDetail.css'; // Import the styles

const DestinationDetail = () => {
  const { id } = useParams(); // Get the ID from the URL parameters
  const navigate = useNavigate(); // Define navigate here
  
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDestination = async () => {
      setLoading(true); // Set loading state before fetching data
      try {
        const data = await destinationService.getDestinationById(id);
        setDestination(data);
        setLoading(false); // Set loading to false once data is fetched
      } catch (err) {
        setError('Failed to fetch destination details');
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchDestination();
  }, [id]); // Fetch new destination data when the ID changes

  // Render loading or error states
  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  // Handle Booking button click
  const handleBooking = () => {
    // Navigate to booking page with destination details in state
    navigate('/booking', {
      state: {
        name: destination.name,
        price: destination.price,
        travelModes: destination.travelModes,
      }
    });
  };

  return (
    <div className="destination-detail">
      <div className="destination-detail-header">
        <h2>{destination.name}</h2>
      </div>
      <div className="destination-detail-body">
        <img src={destination.imageUrl} alt={destination.name} className="destination-image" />
        <div className="destination-info">
          <p>{destination.description}</p>
          <p className="price">${destination.price}</p>
        </div>
      </div>

      {/* Travel Modes Availability */}
      <div className="travel-modes">
        <h3>Available Travel Modes</h3>
        <ul>
          {destination.travelModes && destination.travelModes.length > 0 ? (
            destination.travelModes.map((mode, index) => (
              <li key={index}>{mode} - Available</li>
            ))
          ) : (
            <li>No travel modes available for this destination.</li>
          )}
        </ul>
      </div>

      {/* Book Now Button */}
      <div className="destination-booking">
        <button onClick={handleBooking} className="book-now-btn">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default DestinationDetail;
