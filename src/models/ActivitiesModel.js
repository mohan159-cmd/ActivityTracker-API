//#region imports
const { query } = require('../config/dbHelper');
const { dbqueries } = require('../config/DBQueries');
const { createSqlQueryusingParams } = require('../utils/CommonFunctions');

//#region functions
const getActivitiesByCatlogIdModel = async(params) => {
try{
    const { catlogId } = params;
    const sqlquery = dbqueries.activities.select_activities_by_catlogId;
    const parameters = [catlogId];
    const finalQuery = createSqlQueryusingParams(sqlquery,parameters);
    console.log("grt activities", finalQuery)
    const result = await query(finalQuery);
    return result;
}
 catch(error){
    throw error;
 }
}

const getActivityByIdModel = async(params) => {
    try{
        const { activityId } = params;
        const sqlquery = dbqueries.activities.select_activity_by_id;
        const parameters = [activityId];
        const finalQuery = createSqlQueryusingParams(sqlquery,parameters);
        console.log("get activity by id", finalQuery)
        const result = await query(finalQuery);
        return result;
    }
     catch(error){
        throw error;
     }
}

const createActivityByCatlogIdModel = async (params) => {
    try {
        const { catlogId,name,description,createdDate,startDate,endDate,fileURL } = params;
        const sqlquery = dbqueries.activities.create_activity_by_catlogId;
        const parameters = [catlogId,name,description,createdDate,startDate,endDate,fileURL];
        const finalQuery = createSqlQueryusingParams(sqlquery, parameters);
        console.log("create activity by catlog id : ", finalQuery);
        const result = await query(finalQuery);
        return result;
    } catch (error) {
        throw error;
    }
};

const updateActivityByIdModel = async(params) => {
    try{
        const { activityId,name,description,startDate,endDate } = params;
        const sqlquery = dbqueries.activities.update_activity_by_id;
        const parameters = [name,description,startDate,endDate,activityId];
        const finalQuery = createSqlQueryusingParams(sqlquery, parameters);
        console.log("update activity by id : ", finalQuery);
        const result = await query(finalQuery);
        return result;
    }
    catch(error){
        throw error;
    }
}

//#region exports
module.exports = {
    getActivitiesByCatlogIdModel,
    createActivityByCatlogIdModel,
    getActivityByIdModel,
    updateActivityByIdModel
}
//#endregion exports