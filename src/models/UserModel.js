//#region imports
const { query } = require('../config/dbHelper');
const { dbqueries } = require('../config/DBQueries');
const { createSqlQueryusingParams } = require('../utils/CommonFunctions');

//#region functions
const getUsersModel = async() => {
    try{
       const result = await query(dbqueries.users.select_all_users)
       return result;
    }
    catch(error){
     throw "error connecting to database";
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
      if(result.length === 0){
         return false
      }
      return result;
   } catch (error) {
      throw error; 
   }
};

const createNewUserModel = async (params) => {
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

const updateUserModel = async(params) => {
    try{
      const { userId,firstName,lastName, email, password } = params;
      const sqlQuery = dbqueries.users.update_user;
      const parameters = [email, firstName, lastName, password];
      const finalQuery = createSqlQueryusingParams(sqlQuery,parameters);
      console.log("Update User Query: ", finalQuery);
      const result = query(finalQuery);
      return result;
    }
    catch(error){
      throw error;
    }
}

const getUserAuthenticationModel = async(params) => {
   try{
      const { email,password } = params;
      const sqlQuery = dbqueries.users.check_user_credentials;
      const parameters = [email,password];
      const finalQuery = createSqlQueryusingParams(sqlQuery,parameters);
      console.log("Check User Query:  ", finalQuery)
      const result = query(finalQuery);
      return result;
   }
   catch(error){
      throw error;
   }
}

//#region exports
 module.exports = {
   getUsersModel,
   getUserbyIdModel,
   createNewUserModel,
   getUserbyEmailModel,
   updateUserModel,
   getUserAuthenticationModel
 }
 