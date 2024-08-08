const express = require('express');
require('dotenv').config();
const path = require('path');
const fetch = require('node-fetch');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint for Astronomy Picture of the Day (APOD)
app.get('/api/apod', async (req, res) => {
  const apiKey = process.env.API_KEY;
  const date = req.query.date || ''; // Get date from query parameters
  const url = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${apiKey}`;

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

// Serve the search-date page
app.get('/search-date', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'search-date', 'date.html'));
});

// Serve the astronomy page
app.get('/astronomy', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'astronomy', 'astro.html'));
});

// Serve the news page
app.get('/news', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'nasa-news', 'nasa.html'));
});

// Serve the about page
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'abt-me', 'me.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
