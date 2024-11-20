import React from 'react';

const About = () => {
    return (
        <div style={styles.container}>
            {/* Header Section */}
            <header style={styles.header}>
                <h1>About Our Travel Agency</h1>
                <p style={styles.tagline}>Bringing You Unforgettable Journeys</p>
            </header>

            {/* Mission Section */}
            <section style={styles.missionSection}>
                <h2 style={styles.subheading}>Our Mission</h2>
                <p style={styles.missionText}>
                    At [Travel Agency Name], our mission is to curate unforgettable experiences, ensuring every journey is a step towards your dreams. Whether you’re looking for adventure, relaxation, or discovery, we’re here to make it happen.
                </p>
            </section>

            {/* Team Section */}
            <section style={styles.teamSection}>
                <h2 style={styles.subheading}>Meet the Team</h2>
                <div style={styles.teamContainer}>
                    <div style={styles.teamCard}>
                        <img src="/path/to/team_member_1.jpg" alt="Team Member" style={styles.teamImage} />
                        <h3>Kiran Kumar B Doddamani</h3>
                        <p>CEO & Founder</p>
                    </div>
                    <div style={styles.teamCard}>
                        <img src="/path/to/team_member_2.jpg" alt="Team Member" style={styles.teamImage} />
                        <h3>Jeevan M</h3>
                        <p>Head of Operations</p>
                    </div>
                    <div style={styles.teamCard}>
                        <img src="/path/to/team_member_3.jpg" alt="Team Member" style={styles.teamImage} />
                        <h3>Akash </h3>
                        <p>Lead Travel Consultant</p>
                    </div>
                    {/* Add more team members as needed */}
                </div>
            </section>
        </div>
    );
};

// Define styles
const styles = {
    container: {
        textAlign: 'center',
        padding: '20px',
    },
    header: {
        marginBottom: '30px',
    },
    tagline: {
        fontSize: '1.5em',
        color: '#50b3a2',
    },
    missionSection: {
        margin: '50px 0',
    },
    subheading: {
        fontSize: '2em',
        marginBottom: '20px',
    },
    missionText: {
        maxWidth: '800px',
        margin: '0 auto',
        fontSize: '1.2em',
        lineHeight: '1.6',
    },
    teamSection: {
        margin: '50px 0',
    },
    teamContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    teamCard: {
        margin: '10px',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        textAlign: 'center',
        width: '200px',
        transition: 'transform 0.3s',
    },
    teamImage: {
        width: '100%',
        borderRadius: '50%',
        marginBottom: '10px',
    },
};

export default About;
