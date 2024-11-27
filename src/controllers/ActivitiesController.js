const { getActivitiesByCatlogIdModel } = require("../models/ActivitiesModel");

const getActivitiesByCatlogIdController = async(req,res) => {
    try{
        const { catlogId } = req.params;
        const activities = await getActivitiesByCatlogIdModel({ catlogId });
        res.status(200).json(activities);
    }
    catch(error){
        res.status(500).json({ error: error });
    }
}

//#region exports
module.exports = {
    getActivitiesByCatlogIdController
}