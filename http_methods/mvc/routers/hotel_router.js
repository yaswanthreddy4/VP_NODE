const express = require('express');
const router = express.Router();
const hotel_controller = require('../contollers/hotel_controller');

router
    .route('/hotels')
    .get(hotel_controller.getAllHotels);

router
    .route('/hotel/:hotelId')
    .get(hotel_controller.getOneHotel);

module.exports = router;