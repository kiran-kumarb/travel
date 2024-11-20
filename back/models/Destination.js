const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
    name: { type: String, required: true }, // e.g., "New York"
    type: { type: String, required: true, enum: ['flight', 'bus', 'train'] }, // Type of travel
    price: { type: Number, required: true }, // e.g., 200
    description: { type: String }, // Optional
    imageUrl: { type: String }, // Image URL for the destination
}, { timestamps: true });

module.exports = mongoose.model('Destination', destinationSchema);
