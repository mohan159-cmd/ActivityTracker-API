const express = require('express');
const router = express.Router();
const moviesController = require('./controllers/MoviesController');

router.get("/GetAllMovies", moviesController.getMoviesController);

module.exports = router;
