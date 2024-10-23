const axios = require('axios');
const smithsonianApiKey = process.env.SMITHSONIAN_API_KEY;

const getSmithsonianData = async (repoUrl) => {
  try {
    const response = await axios.get(repoUrl, {
      headers: {
        'Authorization': `Bearer ${smithsonianApiKey}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching Smithsonian data:', error);
    throw error;
  }
};

module.exports = { getSmithsonianData };