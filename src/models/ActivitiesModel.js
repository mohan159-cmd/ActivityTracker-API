//#region imports
const { query } = require('../config/dbHelper');
const { dbqueries } = require('../config/dbqueries');
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

//#region exports
module.exports = {
    getActivitiesByCatlogIdModel
}
//#endregion exports