const express = require('express');
const router = express.Router();
const userController = require('./controllers/UserController');

router.get("/GetAllUsers", userController.getUsersController);
router.get("/GetUserbyId/id=:id", userController.getUserbyIdController);

module.exports = router;
