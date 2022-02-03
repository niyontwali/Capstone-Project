const express = require('express');
const router = express.Router();
const signupController = require('../controllers/signup')

/* POST signup page. */
router.post('/', signupController);

module.exports = router;
