import React, { useState } from 'react';

const MultiBooking = () => {
    const [selectedBookingType, setSelectedBookingType] = useState(null);
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState('');
    const [popularTrains, setPopularTrains] = useState([]);
    const [popularFlights, setPopularFlights] = useState([]);
    const [popularHotels, setPopularHotels] = useState([]);
    const [popularCars, setPopularCars] = useState([]);

    const handleBookingTypeChange = (type) => {
        setSelectedBookingType(type);
    };

    const searchBookings = () => {
        // Sample data for different bookings
        const popularTrainsData = [
            { train: 'Train Company A', price: '$50' },
            { train: 'Train Company B', price: '$45' },
            { train: 'Train Company C', price: '$48' }
        ];

        const popularFlightsData = [
            { flight: 'Flight Airline A', price: '$150' },
            { flight: 'Flight Airline B', price: '$120' },
            { flight: 'Flight Airline C', price: '$140' }
        ];

        const popularHotelsData = [
            { hotel: 'Hotel Luxe', price: '$120/night' },
            { hotel: 'Hotel Comfort', price: '$90/night' },
            { hotel: 'Hotel Paradise', price: '$100/night' }
        ];

        const popularCarsData = [
            { car: 'Sedan Car A', price: '$40/day' },
            { car: 'SUV Car B', price: '$60/day' },
            { car: 'Convertible Car C', price: '$80/day' }
        ];

        // Set data based on booking type
        if (selectedBookingType === 'train') {
            setPopularTrains(popularTrainsData);
        } else if (selectedBookingType === 'flight') {
            setPopularFlights(popularFlightsData);
        } else if (selectedBookingType === 'hotel') {
            setPopularHotels(popularHotelsData);
        } else if (selectedBookingType === 'car') {
            setPopularCars(popularCarsData);
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h1 style={styles.title}>Multi Booking System</h1>
            </div>

            <div style={styles.bookingTypeSelector}>
                <button
                    onClick={() => handleBookingTypeChange('train')}
                    style={selectedBookingType === 'train' ? styles.selectedButton : styles.button}
                >
                    Train
                </button>
                <button
                    onClick={() => handleBookingTypeChange('flight')}
                    style={selectedBookingType === 'flight' ? styles.selectedButton : styles.button}
                >
                    Flight
                </button>
                <button
                    onClick={() => handleBookingTypeChange('hotel')}
                    style={selectedBookingType === 'hotel' ? styles.selectedButton : styles.button}
                >
                    Hotel
                </button>
                <button
                    onClick={() => handleBookingTypeChange('car')}
                    style={selectedBookingType === 'car' ? styles.selectedButton : styles.button}
                >
                    Car
                </button>
            </div>

            {/* Booking Form */}
            {selectedBookingType && (
                <div style={styles.formContainer}>
                    <h2 style={styles.formTitle}>Enter {selectedBookingType.charAt(0).toUpperCase() + selectedBookingType.slice(1)} Details</h2>
                    <div style={styles.inputGroup}>
                        <label htmlFor="from" style={styles.label}>From</label>
                        <input
                            type="text"
                            id="from"
                            value={from}
                            onChange={(e) => setFrom(e.target.value)}
                            placeholder="Enter departure location"
                            style={styles.input}
                            required
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label htmlFor="to" style={styles.label}>To</label>
                        <input
                            type="text"
                            id="to"
                            value={to}
                            onChange={(e) => setTo(e.target.value)}
                            placeholder="Enter destination"
                            style={styles.input}
                            required
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label htmlFor="date" style={styles.label}>Date</label>
                        <input
                            type="date"
                            id="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            style={styles.input}
                            required
                        />
                    </div>
                    <button onClick={searchBookings} style={styles.button}>Search {selectedBookingType.charAt(0).toUpperCase() + selectedBookingType.slice(1)}s</button>
                </div>
            )}

            {/* Results Section */}
            {selectedBookingType && (
                <div style={styles.results}>
                    <h2 style={styles.sectionTitle}>Popular {selectedBookingType.charAt(0).toUpperCase() + selectedBookingType.slice(1)}s</h2>
                    <div style={styles.resultsList}>
                        {(selectedBookingType === 'train' ? popularTrains : selectedBookingType === 'flight' ? popularFlights : selectedBookingType === 'hotel' ? popularHotels : popularCars)
                            .map(item => (
                                <div key={item[selectedBookingType]} style={styles.resultItem}>
                                    {item[selectedBookingType]} - {item.price}
                                </div>
                            ))}
                    </div>
                </div>
            )}
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Helvetica, Arial, sans-serif',
        margin: 0,
        padding: 20,
        backgroundColor: '#f0f4f8',
        minHeight: '100vh',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0077cc',
        color: 'white',
        padding: '15px',
        borderRadius: '10px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    },
    title: {
        fontSize: '28px',
        margin: 0,
    },
    bookingTypeSelector: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
    },
    button: {
        padding: '12px 20px',
        margin: '0 10px',
        backgroundColor: '#fff',
        color: '#333',
        border: '2px solid #0077cc',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'background-color 0.3s',
    },
    selectedButton: {
        backgroundColor: '#0077cc',
        color: 'white',
        border: '2px solid #0077cc',
    },
    formContainer: {
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        marginTop: '30px',
        opacity: 0,
        animation: 'fadeIn 0.5s forwards',
    },
    formTitle: {
        fontSize: '22px',
        marginBottom: '20px',
        color: '#333',
    },
    inputGroup: {
        marginBottom: '15px',
    },
    label: {
        display: 'block',
        fontSize: '14px',
        marginBottom: '5px',
        color: '#333',
        fontWeight: '600',
    },
    input: {
        width: '100%',
        padding: '12px',
        borderRadius: '5px',
        border: '1px solid #ddd',
        fontSize: '16px',
        backgroundColor: '#f9f9f9',
        boxSizing: 'border-box',
        transition: 'border-color 0.3s',
    },
    results: {
        marginTop: '50px',
    },
    sectionTitle: {
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '15px',
        color: '#333',
    },
    resultsList: {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px',
    },
    resultItem: {
        padding: '10px',
        fontSize: '16px',
        borderBottom: '1px solid #eee',
    },
};

export default MultiBooking;
