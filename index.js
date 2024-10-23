const { queryOpenAI } = require('../services/openaiService');

const getOpenAIResponse = async (req, res) => {
  const { query } = req.body;
  try {
    const result = await queryOpenAI(query);
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: 'OpenAI API error' });
  }
};

module.exports = { getOpenAIResponse };