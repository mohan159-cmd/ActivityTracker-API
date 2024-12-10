const express = require('express');
const app = express();
const apiRouters = require('./routes');

// Middleware to parse JSON requests
app.use(express.json());

// Test Route
app.get('/', (req, res) => {
  res.send('Welcome to the Tracker API!');
});

// Your API routes
app.use('/v1', apiRouters);

/* // Start the server
app.listen(8080, () => {
  console.log('Server is running on port 8080');
}); */


// Export app as a handler for Vercel
module.exports = (req, res) => {
  app(req, res);  // Use the Express app to handle requests
};
