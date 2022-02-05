const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login')

/* POST signup page. */
router.post('/', loginController);

module.exports = router;
