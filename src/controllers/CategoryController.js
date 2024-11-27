const { getCategoriesByUserIdModel, createCategoriesByUserIdModel } = require("../models/CategoryModel");

const getCategoriesByUserIdController = async(req,res) => {
    try{
        const { userId } = req.params;
        const categories = await getCategoriesByUserIdModel({ userId });
        res.status(200).json(categories);
    }
    catch(error){
        res.status(500).json({ error: error });
    }
}

const createCategoryByUserIdController = async(req,res) => {
    try{
       const { name,description,userId } = req.body;
       const result = await createCategoriesByUserIdModel({ name,description,userId });
       res.status(200).json({ message: "Category created successfully" });
    }
    catch(err){
        res.status(500).json({ error: err });
    }
}

module.exports = {
    getCategoriesByUserIdController,
    createCategoryByUserIdController
}