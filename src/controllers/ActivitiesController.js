const { getActivitiesByCatlogIdModel, createActivityByCatlogIdModel, getActivityByIdModel, upateActivityByIdModel, updateActivityByIdModel } = require("../models/ActivitiesModel");

const getActivitiesByCatlogIdController = async (req, res) => {
    try {
        const { catlogId } = req.params;
        const activities = await getActivitiesByCatlogIdModel({ catlogId });
        res.status(200).json(activities);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
} 


const getActivityByIdController = async (req, res) => {
    try {
        const { activityId } = req.params;
        const activity = await getActivityByIdModel({ activityId });
        res.status(200).json(activity);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
}

const createActivityByCatlogIdController = async (req, res) => {
    try {
        const { catlogId, name, description, createdDate, startDate, endDate } = req.body;
        const activity = await createActivityByCatlogIdModel({ catlogId, name, description, createdDate, startDate, endDate });
        res.status(200).json("Activity Created Successfully");
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
}

const updateActivityByIdController = async (req, res) => {
    try {
        const { activityId, name, description, startDate, endDate } = req.body;
        const activity = await updateActivityByIdModel({ activityId, name, description, startDate, endDate });
        res.status(200).json("Activity Updated Successfully");
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
}

//#region exports
module.exports = {
    getActivitiesByCatlogIdController,
    createActivityByCatlogIdController,
    getActivityByIdController,
    updateActivityByIdController
}
