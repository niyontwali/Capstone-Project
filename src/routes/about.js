const express = require('express');
const router = express.Router();
const path = require('path')
const aboutController = require('../controllers/about')

/* GET About page. */
router.get('/', aboutController);

module.exports = router;
