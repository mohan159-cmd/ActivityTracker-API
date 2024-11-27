const { getCatlogsByCategoryIdModel, craeteCatlogModel, createCatlogModel } = require("../models/CatlogModel");

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

const createCatlogController = async(req,res) => {
    try{
        const moment = require('moment');
        const todayDate = moment().format('YYYY/MM/DD');
        const { categoryId,name,description } = req.body;
        const catlogs = await createCatlogModel({ categoryId,name,description,todayDate });
        res.status(200).json("Catlog Craeted Sucessfully");
    }
    catch(error){
        res.status(500).json({ error: error });
    }
}

module.exports = {
    getCatlogsByCategoryIdController,
    createCatlogController
}