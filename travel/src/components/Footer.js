// src/components/Footer.js
import React from "react";
import visaimage from "../assets/visalogo.png"; 
import gpayimage from '../assets/gpay.png';
import phonepayimage from '../assets/phone.png';
import mastercardimage from '../assets/mastercard.png';
import rupayimage from '../assets/rupay.png';
import facebookimage from '../assets/facebook.png';
import twitterimage from '../assets/twitter.png';
import instagramimage from '../assets/instagram.png';
const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                {/* Logo and Contact Information */}
                <div style={styles.section}>
                    <h4 style={styles.heading}>Your Happiness is Our Responbility </h4>
                    <h2 style={styles.brand}>Make MY Travel</h2>
                    <p>
                        <strong>Call Us</strong><br />
                        09999-331-771<br />
                        +91 76235-67890
                    </p>
                    <p>
                        <strong>Email</strong><br />
                        support@Make My travels 
                    </p>
                </div>

                {/* Quick Links */}
                <div style={styles.section}>
                    <h4 style={styles.heading}>Quick Links</h4>
                    <ul style={styles.list}>
                        <li>Home</li>
                        <li>Flight</li>
                        <li>Hotel</li>
                        <li>Flight Offers</li>
                        <li>My Booking</li>
                        <li>Airlines</li>
                    </ul>
                </div>

                {/* Packages */}
                <div style={styles.section}>
                    <h4 style={styles.heading}>Packages</h4>
                    <ul style={styles.list}>
                        <li>Goa</li>
                        <li>Kashmir</li>
                        <li>Himachal</li>
                        <li>Kerala</li>
                        <li>Dubai</li>
                        <li>All Packages</li>
                    </ul>
                </div>

                {/* Support */}
                <div style={styles.section}>
                    <h4 style={styles.heading}>Support</h4>
                    <ul style={styles.list}>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>

                {/* Connect With Us */}
                <div style={styles.section}>
                    <h4 style={styles.heading}>Connect With Us</h4>
                    <div style={styles.socialIcons}>
                        <img src={facebookimage} alt=" " style={styles.logo}/>
                        <img src={instagramimage} alt =''style={styles.logo}/>
                        <img src={twitterimage} alt= " " style={styles.logo}/>
                    </div>
                    <p style={styles.payment}></p>
                </div>
            </div>

            <hr style={styles.divider} />

            {/* Payment and Accreditation */}
            <div style={styles.bottom}>
                <div style={styles.paymentIcons}>
                    <img src={visaimage}alt=" "style={styles.logo}/>
                    <img src={phonepayimage} alt="" style={styles.logo}/>
                    <img src={gpayimage} alt=""style={styles.logo}/> 
                    <img src={mastercardimage} alt=""style={styles.logo}/>
                    <img src={rupayimage} alt=""style={styles.logo}/>

                </div>
                
            </div>

            <p>&copy; 2024. All rights reserved.</p>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor:"#333333",
        color: "#FFFFFF",
        textAlign: "left",
        padding: "20px 50px",
        fontFamily: "Arial, sans-serif",
    },
    container: {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
    },
    section: {
        flex: "1",
        margin: "10px",
        minWidth: "150px",
    },
    heading: {
        fontSize: "18px",
        marginBottom: "10px",
        fontWeight: "bold",
    },
    list: {
        listStyleType: "none",
        padding: "0",
    },
    socialIcons: {
        display: "flex",
        gap: "10px",
    },
    payment: {
        marginTop: "10px",
        fontWeight: "bold",
    },
    divider: {
        border: "none",
        borderTop: "1px solid #ddd",
        margin: "20px 0",
    },
    bottom: {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
    },
    paymentIcons: {
        display: "flex",
        gap: "10px",
    },
    accredited: {
        display: "flex",
        gap: "10px",
    },
    brand: {
        color: "#007bff",
        fontSize: "24px",
        fontWeight: "bold",
    },
    logo: {
        width: "75px", // Adjust the width as needed
        marginBottom: "5px",
    },
    
};

export default Footer;