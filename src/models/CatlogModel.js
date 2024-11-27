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

const createCatlogModel = async (params) => {
    try {
        const { categoryId,name,description,todayDate } = params;
        const sqlquery = dbqueries.catlogs.create_catlog;
        const parameters = [categoryId,name,description,todayDate];
        const finalQuery = createSqlQueryusingParams(sqlquery, parameters);
        console.log("create catlog : ", finalQuery);
        const result = await query(finalQuery);
        return result;
    } catch (error) {
        throw error;
    }
};

//#region exports
module.exports = {
    getCatlogsByCategoryIdModel,
    createCatlogModel
}
//#endregion exports