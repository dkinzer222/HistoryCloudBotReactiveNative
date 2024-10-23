const express = require('express');
const cors = require('cors');
require('dotenv').config();

const openaiRoutes = require('./routes/openaiRoutes');
const smithsonianRoutes = require('./routes/smithsonianRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use('/api/openai', openaiRoutes);
app.use('/api/smithsonian', smithsonianRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});