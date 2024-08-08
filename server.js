const express = require("express");
require('dotenv').config();
const path = require('path');
const fetch = require('node-fetch');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/apod', async (req, res) => {
  const apiKey = process.env.API_KEY;
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

  try {
    const response = await fetch(url);
    const apiData = await response.json();
    res.json(apiData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from NASA API' });
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'homepage', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
