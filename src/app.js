const express = require('express');
const app = express();

const apiRouters = require('./routes');

app.use(express.json()); // To parse JSON requests

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Movie and Employee Management System!');
});

app.use('/v1/', apiRouters);
  
app.listen(8080, () => {
  console.log('Server is running on port 8080');
  console.log('Swagger UI available at http://localhost:8080/api-docs');
});
