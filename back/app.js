const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');
const destinationRoutes = require('./routes/destinationRoutes');
const app = express();
const bookingRoutes = require('./routes/bookingRoutes');  // Adjust to your file structure
// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', routes);
app.use('/api/destinations', destinationRoutes);

// Use the booking routes
app.use('/api/bookings', bookingRoutes);  // Use '/api/bookings' for booking-related routes
app.use('/',bookingRoutes)
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

module.exports = app;
