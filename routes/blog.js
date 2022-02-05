const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blog')
const auth = require('../middleware/auth');

/* GET Blog page. */
router.get('/', auth, blogController);

module.exports = router;
