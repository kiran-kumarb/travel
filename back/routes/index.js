const express = require('express');
const router = express.Router();
const destinationRoutes = require('./destinationRoutes');
// const authRoutes = require('./authRoutes');

router.use('/destinations', destinationRoutes); // Base path for destinations
// router.use('/api/auth', authRoutes);
module.exports = router;
