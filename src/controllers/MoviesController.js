const moviesModel = require('../models/MoviesModel');

const getMoviesController = async (req, res) => {
  try {
    const employees = await moviesModel.getMoviesModel();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching employees' });
  }
};

module.exports = {
    getMoviesController
};
