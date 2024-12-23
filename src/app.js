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
  res.status(500).json({ message: 'Internal Server Error 159' });
});

// Start the server
const PORT = process.env.PORT || 8080; // Default to 3000 if no PORT env variable
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/* // Start the server
app.listen(8080, () => {
  console.log('Server is running on port 8080');
});  */ 