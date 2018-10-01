const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotel.controller');

router.route('/hotel').get(hotelController.getAllHotels);

module.exports = router;