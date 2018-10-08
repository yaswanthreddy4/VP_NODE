const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller')

router
    .route('/hotel')
    // .post(controller.addUser)
    .get(controller.getAllHotels)

router
    .route('/hotel/:hotelId')
    .get(controller.getOneHotel)
    .delete(controller.deleteHotel)

router
    .route('/user')
    .post(controller.addUser)
    .patch(controller.patchUser)

module.exports = router;