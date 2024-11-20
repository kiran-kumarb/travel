const express = require('express');
const router = express.Router();
const destinationController = require('../controllers/destinationController');

// CRUD Routes
router.post('/', destinationController.createDestination);       // Create
router.get('/', destinationController.getAllDestinations);       // Read All
router.get('/:id', destinationController.getDestinationById);    // Read One (by ID)
router.put('/:id', destinationController.updateDestination);     // Update
router.delete('/:id', destinationController.deleteDestination);  // Delete

module.exports = router;
