const user_controller = require('../controllers/user.controller');
const express = require('express');
const router = express.Router();

// router
//     .route('/user1')
//     .get(user_controller.user1);

// router
//     .route('/user2')
//     .get(user_controller.user2);

// router
//     .route('/user3')
//     .get(user_controller.user3);

// router
//     .route('/user4')
//     .get(user_controller.user4);

router
    .route('/allusers')
    .get(user_controller.allUsers)

module.exports = router;