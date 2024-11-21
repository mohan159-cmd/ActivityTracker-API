const express = require('express');
const router = express.Router();
const usersController = require('./controllers/UsersController');

router.get("/GetAllUsers", usersController.getUsersController);

module.exports = router;
