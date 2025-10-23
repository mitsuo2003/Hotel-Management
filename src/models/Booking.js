const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  guestId: { type: mongoose.Schema.Types.ObjectId, ref: 'Guest', required: true },
  roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true },
  status: { type: String, enum: ['booked', 'checked-in', 'completed'], default: 'booked' }
});

module.exports = mongoose.model('Booking', bookingSchema);
