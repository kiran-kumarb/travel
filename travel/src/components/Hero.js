import React from 'react';
import { Link } from 'react-router-dom';
import parisimage from '../assets/Paris1.jpg';
import londonimage from '../assets/London1.jpg';
import newyorkimage from '../assets/NY1.jpg';
import tokyoimage from '../assets/tokyo.jpg';
import sydenyimage from '../assets/SY1.jpg';
import dubaiimage from '../assets/Dubai.jpg';
import bacerlonaimage from '../assets/Bacerlona.jpg';

const Hero = () => {
    return (
        <div style={styles.container}>
            {/* Hero Section with Background Video */}
            <div style={styles.hero}>
                <video
                    src={`${process.env.PUBLIC_URL}/background-video.mp4`}
                    autoPlay
                    loop
                    muted
                    style={styles.heroVideo}
                />
                <h1 style={styles.heroText}>Explore the World with Us!</h1>
            </div>

            {/* Featured Destinations */}
            <h2 style={styles.sectionTitle}>Featured Destinations</h2>
            <div style={styles.destinations}>
                {destinations.map((destination, index) => (
                    <div key={index} style={styles.cardContainer}>
                        <Link to="/destinations" style={styles.destinationCard}>
                            <img
                                src={destination.image}
                                alt={destination.name}
                                style={styles.destinationImage}
                                className="image"
                            />
                            <div style={styles.overlay}>
                                <div style={styles.text}>{destination.name}</div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Destination Data
const destinations = [
    { name: 'Paris ',  image:  parisimage },
    { name: 'New York', image: newyorkimage },
    { name: 'Tokyo', image: tokyoimage },
    { name: 'London', image: londonimage },
    { name: 'Dubai', image: dubaiimage },
    { name: 'Sydney', image: sydenyimage },
    { name: 'Barcelona', image: bacerlonaimage },
];

// Styles
const styles = {
    container: {
        margin: 0,
        padding: 0,
        textAlign: 'center',
    },
    hero: {
        position: 'relative',
        height: '400px',
        overflow: 'hidden',
        color: 'white',
        textAlign: 'center',
    },
    heroVideo: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        position: 'absolute',
        top: '0',
        left: '0',
        zIndex: '-1',
    },
    heroText: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '2.5em',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
    },
    sectionTitle: {
        marginTop: '20px',
        fontSize: '2em',
    },
    destinations: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '30px',
        marginTop: '20px',
    },
    cardContainer: {
        position: 'relative',
        width: '250px',
        textAlign: 'center',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
    },
    destinationCard: {
        display: 'block',
        textDecoration: 'none',
        color: 'black',
        position: 'relative',
    },
    destinationImage: {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
        transition: '0.5s ease',
    },
    overlay: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
        opacity: 0.5, // Initially hidden
        transition: '0.5s ease',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContainerHover: {
        '&:hover .overlay': {
            opacity: 0.5,
        },
    },
    text: {
        color: 'white',
        fontSize: '1.5em',
        fontWeight: 'bold',
        textAlign: 'center',
    },
};

export default Hero;