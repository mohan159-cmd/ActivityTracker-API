//#region imports
const { query } = require('../config/dbHelper');
const { dbqueries } = require('../config/DBQueries');
const { createSqlQueryusingParams } = require('../utils/CommonFunctions');

//#region functions
const getCategoriesByUserIdModel = async(params) => {
try{
    const { userId } = params;
    const sqlquery = dbqueries.categories.create_category_by_userid;
    const parameters = [userId];
    const finalQuery = createSqlQueryusingParams(sqlquery,parameters);
    console.log("get category by userid : ", finalQuery )
    const result = await query(finalQuery);
    return result;
}
 catch(error){
    throw error;
 }
}

const createCategoriesByUserIdModel = async (params) => {
    try {
        const { name,description,userId } = params;
        const sqlquery = dbqueries.categories.create_category_by_userid;
        const parameters = [name,description,userId];
        const finalQuery = createSqlQueryusingParams(sqlquery, parameters);
        console.log("create category by userid : ", finalQuery);
        const result = await query(finalQuery);
        return result;
    } catch (error) {
        throw error;
    }
};

//#region exports
module.exports = {
    getCategoriesByUserIdModel,
    createCategoriesByUserIdModel
}
//#endregion exports