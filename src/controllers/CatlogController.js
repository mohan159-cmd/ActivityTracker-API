const { getCatlogsByCategoryIdModel } = require("../models/CatlogModel");

const getCatlogsByCategoryIdController = async(req,res) => {
    try{
        const { categoryId } = req.params;
        const catlogs = await getCatlogsByCategoryIdModel({ categoryId });
        res.status(200).json(catlogs);
    }
    catch(error){
        res.status(500).json({ error: error });
    }
}

module.exports = {
    getCatlogsByCategoryIdController,
}