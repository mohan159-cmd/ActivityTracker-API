//#region imports
const { query } = require('../config/dbHelper')

//#region functions
const GetUsersModel = async() => {
    try{
       const result = await query("SELECT * FROM Users")
       return result;
    }
    catch(error){
     throw err;
    }
 }
 
 module.exports = {
   GetUsersModel
 }
 