const express = require('express');
const { fetchSmithsonianInfo } = require('../controllers/smithsonianController');
const router = express.Router();

router.post('/data', fetchSmithsonianInfo);

module.exports = router;