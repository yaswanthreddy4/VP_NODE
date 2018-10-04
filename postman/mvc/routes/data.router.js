const express = require('express');
const router = express.Router();
const data_controller = require('../controllers/data.controller')

router
    .route('/data')
    .get(data_controller.getMethod)
    .post(data_controller.postMethod)
    .put(data_controller.putMethod)
    .patch(data_controller.patchMetod)
    .delete(data_controller.deleteMethod)

module.exports = router;