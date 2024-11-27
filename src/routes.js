const express = require('express');
const router = express.Router();
const userController = require('./controllers/UserController');
const categoryController = require('./controllers/CategoryController')

router.get("/GetAllUsers", userController.getUsersController);
router.get("/GetUserbyId/id=:id", userController.getUserbyIdController);
router.post("/CreateNewUser", userController.createNewUserController);
router.put("/UpdateUser", userController.updateUserController);

router.get("/GetCategoriesbyUserId/userId=:userId", categoryController.getCategoriesByUserIdController)
router.post("/CreateCategory", categoryController.createCategoryByUserIdController)

module.exports = router;
