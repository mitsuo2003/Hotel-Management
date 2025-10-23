const express = require('express');
const router = express.Router();
const { getAllGuests, createGuest, updateGuest, deleteGuest } = require('../controllers/guestsController');

// GET all guests
router.get('/', getAllGuests);

// POST new guest
router.post('/', createGuest);

// PUT update guest by ID
router.put('/:id', updateGuest);

// DELETE guest by ID
router.delete('/:id', deleteGuest);

module.exports = router;
