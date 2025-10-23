require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

const roomsRoutes = require('./src/routes/rooms');
const guestsRoutes = require('./src/routes/guests');
const bookingsRoutes = require('./src/routes/bookings');

const app = express();

// ===== Middleware =====
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// ===== Base Route =====
app.get('/', (req, res) => {
  res.send('🏨 Hotel Management API is running and connected to MongoDB ✅');
});

// ===== API Routes =====
app.use('/api/rooms', roomsRoutes);
app.use('/api/guests', guestsRoutes);
app.use('/api/bookings', bookingsRoutes);

// ===== MongoDB Connection =====
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// ===== Start Server =====
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
