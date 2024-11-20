import React from 'react';
import backContent from '../assets/Back_Content.jpeg'; // Updated path

const Content = () => {
    return (
        <div style={{ ...styles.container, backgroundImage: `url(${backContent})` }}>
            <h2>Content Section</h2>
            <p>This is the content area.</p>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        textAlign: 'center',
        backgroundSize: 'cover', // Ensures the image covers the div
        backgroundPosition: 'center', // Centers the image
        height: '100vh', // Adjust the height as needed
    },
};

export default Content;
