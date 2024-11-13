//#region imports
const { query } = require('../config/dbHelper')

//#region functions
const getEmployeesModel = async() => {
   try{
      const result = await query("SELECT * FROM Employees")
      return result;
   }
   catch(error){
    throw err;
   }
}

module.exports = {
    getEmployeesModel
}

//#region exports