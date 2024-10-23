const { getSmithsonianData } = require('../services/smithsonianService');

const fetchSmithsonianInfo = async (req, res) => {
  const { repoUrl } = req.body;
  try {
    const data = await getSmithsonianData(repoUrl);
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Smithsonian API error' });
  }
};

module.exports = { fetchSmithsonianInfo };