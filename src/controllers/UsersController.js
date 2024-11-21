const { GetUsersModel } = require('../models/GetUsersModel');

const getUsersController = async (req, res) => {
  try {
    const users = await GetUsersModel();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching users' });
  }
};

module.exports = {
    getUsersController
};
