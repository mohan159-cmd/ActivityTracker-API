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

const getUserbyEmailModel = async (params) => {
   try {
      const { email } = params;
      const sqlQuery = dbqueries.users.select_user_by_email;
      const parameters = [email]; 
      const finalQuery = createSqlQueryusingParams(sqlQuery, parameters);
      console.log("User By Email query: ", finalQuery);
      const result = await query(finalQuery);
      return result;
   } catch (error) {
      throw error; 
   }
};

const createNewUserModel = (params) => {
    try{
      const { firstName,lastName, email, password } = params;
      const sqlQuery = dbqueries.users.insert_user;
      const parameters = [firstName, lastName, email, password];
      const finalQuery = createSqlQueryusingParams(sqlQuery, parameters);
      console.log("New User query: ", finalQuery);
      const result = query(finalQuery);
      return result;
    }
    catch(error){
      throw error;
    }
}

 
 module.exports = {
   getUsersModel,
   getUserbyIdModel,
   createNewUserModel,
   getUserbyEmailModel
 }
 