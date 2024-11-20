const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const destinationRoutes = require('./routes/destinationRoutes');
const cors = require('cors');
const bookingRoutes = require('./routes/bookingRoutes'); // Import your routes file

// Load environment variables
dotenv.config();
console.log(process.env.SECRET_KEY); 
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/destinations', destinationRoutes);
app.use('/api/bookings', bookingRoutes); // Register the booking routes

app.use('/api/destinations/bookings', bookingRoutes); // Register the booking routes

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error: ', err));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
