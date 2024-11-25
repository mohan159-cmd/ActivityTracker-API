const { getUserbyIdModel, getUsersModel } = require("../models/UserModel");


const getUsersController = async (req, res) => {
  try {
    const users = await getUsersModel();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const getUserbyIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getUserbyIdModel(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = {
    getUsersController,
    getUserbyIdController
};
