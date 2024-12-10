const express = require('express');
const app = express();
const apiRouters = require('./routes');

// Middleware to parse JSON requests
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Welcome to the Tracker API!');
});

// API routes
app.use('/v1', apiRouters);

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.stack || err);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Export as handler for Vercel
module.exports = (req, res) => {
  app(req, res);
};
