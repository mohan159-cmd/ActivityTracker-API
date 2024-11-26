const { getCategoriesByUserIdModel } = require("../models/CategoryModel");

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

module.exports = {
    getCategoriesByUserIdController
}