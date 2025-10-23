const Guest = require('../models/Guest');

// GET all guests
exports.getAllGuests = async (req, res) => {
  try {
    const guests = await Guest.find();
    res.json(guests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST new guest
exports.createGuest = async (req, res) => {
  try {
    const newGuest = new Guest(req.body);
    await newGuest.save();
    res.status(201).json(newGuest);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// PUT update guest by ID
exports.updateGuest = async (req, res) => {
  try {
    const updatedGuest = await Guest.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedGuest) {
      return res.status(404).json({ error: 'Guest not found' });
    }
    res.json(updatedGuest);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE guest by ID
exports.deleteGuest = async (req, res) => {
  try {
    const deletedGuest = await Guest.findByIdAndDelete(req.params.id);
    if (!deletedGuest) {
      return res.status(404).json({ error: 'Guest not found' });
    }
    res.json({ message: 'Guest deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

