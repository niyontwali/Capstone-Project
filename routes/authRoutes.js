const express = require('express');
const authController = require('../controllers/authController')
const router = express.Router();

router.get('/users/signup', authController.signup_get)
router.post('/users/signup', authController.signup_post )
router.get('/users/login', authController.login_get)
router.post('/users/login', authController.login_post ) 


module.exports = router;