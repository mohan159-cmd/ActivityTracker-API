const express = require('express');
const cors = require('cors'); // Import CORS middleware
const app = express();
const apiRouters = require('./routes');

// Enable CORS
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
const PORT = process.env.PORT;
if (!PORT) {
  throw new Error('PORT is not defined');
}
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
