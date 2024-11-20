import React, { useState, useEffect } from 'react';
import destinationService from '../services/destinationService';
import { Link } from 'react-router-dom';
import '../styles/Destinations.css';

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const data = await destinationService.getDestinations();
        setDestinations(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch destinations');
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="destinations-section">
      <div className="destinations-header">
        <h2>Popular Destinations</h2>
        {/* Button to redirect to recent bookings */}
        <Link to="/bookings">
          <button className="more-button">Recent Bookings</button>
        </Link>
      </div>
      <div className="destinations-container">
        {destinations.map((destination) => (
          <Link 
            to={`/destinations/${destination._id}`} 
            key={destination._id} 
            className="destination-card"
          >
            <img src={destination.imageUrl} alt={destination.name} />
            <h3>{destination.name}</h3>
            <p>{destination.description}</p>
            <p className="price">${destination.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
