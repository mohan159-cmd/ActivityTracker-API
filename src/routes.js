const express = require('express');
const router = express.Router();
const userController = require('./controllers/UserController');
const categoryController = require('./controllers/CategoryController')
const catlogController = require('./controllers/CatlogController')
const activitiesController = require('./controllers/ActivitiesController')

router.get("/GetAllUsers", userController.getUsersController);
router.get("/GetUserbyId/id=:id", userController.getUserbyIdController);
router.post("/CreateNewUser", userController.createNewUserController);
router.put("/UpdateUser", userController.updateUserController);

router.get("/GetCategoriesbyUserId/userId=:userId", categoryController.getCategoriesByUserIdController)
router.post("/CreateCategory", categoryController.createCategoryByUserIdController)

router.get("/GetCatlogsbyCatgeoryId/categoryId=:categoryId", catlogController.getCatlogsByCategoryIdController)
router.get("/GetActivitiesbyCatlogId/catlogId=:catlogId",activitiesController.getActivitiesByCatlogIdController )

module.exports = router;
