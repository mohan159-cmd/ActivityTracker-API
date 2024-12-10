const express = require('express');
const app = express();
const apiRouters = require('./routes');

app.use(express.json()); // To parse JSON requests

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Tracker API!');
});

// API routes
app.use('/v1/', apiRouters);

// Start the server
app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
