// src/services/api.js
import axios from 'axios';

// Get the JWT token from localStorage or React state
const token = localStorage.getItem('token');  // Assuming you saved the token after login

const api = axios.create({
    baseURL: 'http://localhost:5000/api', // Your backend URL
    headers: {
        'Authorization': `Bearer ${token}`,  // Attach the token for protected routes
    },
});

export default api;
