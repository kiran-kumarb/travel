import React from 'react';
import { useAuth } from '../context/AuthContext'; // Import the useAuth hook

const BookingHistory = ({ bookings }) => {
    const { user } = useAuth(); // Access user data from the AuthContext

    return (
        <div style={styles.container}>
            <h2>{user ? `${user.email}'s Booking History` : 'Booking History'}</h2>
            {bookings.length > 0 ? (
                <ul style={styles.list}>
                    {bookings.map((booking, index) => (
                        <li key={index} style={styles.item}>
                            <p><strong>Destination:</strong> {booking.destination}</p>
                            <p><strong>Name:</strong> {booking.name}</p>
                            <p><strong>Date:</strong> {booking.date}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No bookings found.</p>
            )}
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        textAlign: 'center',
    },
    list: {
        listStyleType: 'none',
        padding: 0,
    },
    item: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        margin: '10px 0',
        padding: '10px',
        textAlign: 'left',
    },
};

export default BookingHistory;
