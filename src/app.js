const express = require('express');
const app = express();

const apiRouters = require('./routes');

app.use(express.json()); // To parse JSON requests

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Tracker API!');
});

app.use('/v1/', apiRouters);
  
app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
