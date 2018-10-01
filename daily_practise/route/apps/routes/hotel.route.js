const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotel.controller');

router
    .route('/hotels')
    .get(hotelController.getAllHotels);

module.exports.router;