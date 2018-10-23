const express = require('express');
const router = express.Router();
const controller = require('../controllers/index');

router
    .route('/hotels')
    .get(controller.getAllHotels)
    .post(controller.addHotel)



router
    .route('/hotel/:hotelId')
    .get(controller.getOneHotel)
    .put(controller.updateOneHotel)
    .delete(controller.deleteOneHotel)

module.exports = router;