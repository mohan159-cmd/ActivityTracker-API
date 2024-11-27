//#region imports
const { query } = require('../config/dbHelper');
const { dbqueries } = require('../config/dbqueries');
const { createSqlQueryusingParams } = require('../utils/CommonFunctions');

//#region functions
const getCatlogsByCategoryIdModel = async(params) => {
try{
    const { categoryId } = params;
    const sqlquery = dbqueries.catlogs.select_catlogs_by_categoryId;
    const parameters = [categoryId];
    const finalQuery = createSqlQueryusingParams(sqlquery,parameters);
    console.log("get catlogs : ", finalQuery)
    const result = await query(finalQuery);
    return result;
}
 catch(error){
    throw error;
 }
}

//#region exports
module.exports = {
    getCatlogsByCategoryIdModel
}
//#endregion exports