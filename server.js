const express = require("express");
const dontenv = require('dotenv').config();
const path = require('path');
const app = express();
const port =process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','homepage', 'index.html'));
  });


app.listen(port,() => console.log(`Listening on port ${port}...`));