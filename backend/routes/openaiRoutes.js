const express = require('express');
const { getOpenAIResponse } = require('../controllers/openaiController');
const router = express.Router();

router.post('/query', getOpenAIResponse);

module.exports = router;