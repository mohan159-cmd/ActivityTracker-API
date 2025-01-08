const { getUserbyIdModel, getUsersModel, createNewUserModel, getUserbyEmailModel, updateUserModel, getUserAuthenticationModel } = require("../models/UserModel");


const getUsersController = async (req, res) => {
  try {
    const users = await getUsersModel();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error || "Error fetching users in controller" });
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

const getUserbyEmailController = async (req, res) => {
  try {
    const { email } = req.query;
    const user = await getUserbyEmailModel({ email });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

const createNewUserController = async (req, res) => {
  try {
    const { firstName,lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const isUserEmailExcist = await getUserbyEmailModel({ email });
    if (isUserEmailExcist) {
      return res.status(400).json({ error: "User with this email already exists" });
    }
    const user = await createNewUserModel({ firstName,lastName, email, password });
    res.status(200).json({
      message: 'User created successfully',
      user: user
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const updateUserController = async(req,res) => {
  try{
    const { firstName,lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const result = await updateUserModel({ firstName,lastName, email, password });
    res.status(200).json({
      message: "user updated sucessfully"
    })
  }
  catch(error){
    res.status(500).json({ error: error })
  }
}

const getUserAuthenticationController = async(req,res) => {
  try{
    const { email,password } = req.body;
    if(!email || !password){
      return res.status(400).json({ error: "Missing required fields" });
    }
    const result = await getUserAuthenticationModel({ email,password });
    if(result.length > 0){
      res.status(200).json({
        message : "login successful"
      })
    }
    else{
      return res.status(400).json({ error: "user not found" });
    }
  }
  catch(error){
    res.status(500).json({ error: error })
  }
}

module.exports = {
    getUsersController,
    getUserbyIdController,
    createNewUserController,
    updateUserController,
    getUserAuthenticationController,
    getUserbyEmailController
};
