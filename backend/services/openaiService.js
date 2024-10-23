const axios = require('axios');

const openaiApiKey = process.env.OPENAI_API_KEY;

const queryOpenAI = async (prompt) => {
  try {
    const response = await axios.post('https://api.openai.com/v1/completions', {
      model: 'text-davinci-003',
      prompt,
      max_tokens: 500,
    }, {
      headers: {
        'Authorization': `Bearer ${openaiApiKey}`,
      },
    });
    return response.data.choices[0].text;
  } catch (error) {
    console.error('Error fetching data from OpenAI:', error);
    throw error;
  }
};

module.exports = { queryOpenAI };