import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Log form data to the console
        console.log('Form submitted:', { name, email, message });
        
        // Show alert for the user and reset the form
        alert('Thank you for your message! We will get back to you soon.');
        setName('');
        setEmail('');
        setMessage('');
        setSubmitted(true);
    };

    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1>Contact Us</h1>
            </header>
            
            <div style={styles.formSection}>
                <h2>Get in Touch</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                        required
                        style={styles.input}
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email"
                        required
                        style={styles.input}
                    />
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Your Message"
                        rows="5"
                        required
                        style={styles.textarea}
                    />
                    <button type="submit" style={styles.button}>Send Message</button>
                </form>
            </div>
            
            <div style={styles.qaSection}>
                <h2>Frequently Asked Questions</h2>
                <div style={styles.qaItem}>
                    <h3>How can I change my booking?</h3>
                    <p>To change your booking, please contact our customer service at least 48 hours before your scheduled departure. Additional fees may apply.</p>
                </div>
                <div style={styles.qaItem}>
                    <h3>What's your cancellation policy?</h3>
                    <p>Our cancellation policy varies depending on the type of booking. Generally, cancellations made 7 days or more before the departure date are eligible for a full refund.</p>
                </div>
                <div style={styles.qaItem}>
                    <h3>Do you offer travel insurance?</h3>
                    <p>Yes, we offer comprehensive travel insurance packages. We recommend all travelers to purchase insurance for peace of mind.</p>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
        backgroundColor: '#F0F8FF', // Light background to match header
        padding: '20px',
        textAlign: 'center',
    },
    header: {
        backgroundColor: '#007BFF', // Header Color
        color: 'white',
        paddingTop: '30px',
        minHeight: '70px',
        borderBottom: '#e8491d 3px solid',
    },
    formSection: {
        backgroundColor: '#FFFFFF', // White for form background
        marginTop: '20px',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    },
    input: {
        width: '100%',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '5px',
        border: '1px solid #007BFF', // Border color matching header
    },
    textarea: {
        width: '100%',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '5px',
        border: '1px solid #007BFF', // Border color matching header
    },
    button: {
        width: '100%',
        padding: '10px',
        backgroundColor: '#007BFF', // Button color matching header
        color: '#FFFFFF', // White text
        border: 'none',
        cursor: 'pointer',
        borderRadius: '5px',
    },
    qaSection: {
        backgroundColor: '#FFFFFF', // White background for QA section
        marginTop: '20px',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    },
    qaItem: {
        marginBottom: '20px',
    },
};

export default Contact;
