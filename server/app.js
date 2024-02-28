// file: server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

let requestCount = 0;
let lastResetTime = Date.now();
app.use(cors());

app.use((req, res, next) => {
  const currentTime = Date.now();
  // Reset request count every second
  if (currentTime - lastResetTime >= 1000) {
    requestCount = 0;
    lastResetTime = currentTime;
  }
  
  // Increment the request count
  requestCount++;

  // Check if the request count exceeds 50, and if so, return a 429 error
  if (requestCount > 50) {
    return res.status(429).send('Too many requests');
  } else {
    next();
  }
});

app.get('/api', (req, res) => {
  const delay = Math.floor(Math.random() * 1000) + 1;
  setTimeout(() => {
    res.json({ index: req.query.index });
  }, delay);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
