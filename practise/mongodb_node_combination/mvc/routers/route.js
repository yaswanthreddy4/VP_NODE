const express = require('express');
const router = express.Router();
const controller = require('../controllers/movies_controller');

router
    .route('/movies')
    .post(controller.addMovie)

module.exports = router;