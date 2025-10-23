const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  number: { type: Number, required: true, unique: true },
  type: { type: String, required: true },
  price: { type: Number, required: true },
  status: { type: String, enum: ['available', 'occupied'], default: 'available' }
});

module.exports = mongoose.model('Room', roomSchema);

