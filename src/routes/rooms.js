const express = require('express');
const router = express.Router();
const { getAllRooms, createRoom, updateRoom, deleteRoom } = require('../controllers/roomsController');

router.get('/', getAllRooms);
router.post('/', createRoom);
router.put('/:id', updateRoom);
router.delete('/:id', deleteRoom);

module.exports = router;


