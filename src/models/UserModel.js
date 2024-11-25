//#region imports
const { query } = require('../config/dbHelper');
const { dbqueries } = require('../config/dbqueries');
const { createSqlQueryusingParams } = require('../utils/CommonFunctions');

//#region functions
const getUsersModel = async() => {
    try{
       const result = await query(dbqueries.users.select_all_users)
       return result;
    }
    catch(error){
     throw err;
    }
 }

 const getUserbyIdModel = async (id) => {
   try {
      const sqlQuery = dbqueries.users.select_user_by_id;
      const parameters = [id]; 
      const finalQuery = createSqlQueryusingParams(sqlQuery, parameters);
      console.log("User By Id query: ", finalQuery);
      const result = await query(finalQuery);
      return result;
   } catch (error) {
      throw error; 
   }
};

 
 module.exports = {
   getUsersModel,
   getUserbyIdModel
 }
 