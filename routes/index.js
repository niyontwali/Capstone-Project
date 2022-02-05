const express = require('express');
const router = express.Router();
const path = require('path')
const indexController = require('../controllers/index')

/* GET home page. */
router.get('/', indexController);

module.exports = router;
