//#region imports
const { query } = require('../config/dbHelper')

//#region functions
const getMoviesModel = async() => {
   try{
      const result = "Movies List 200"
      return result;
   }
   catch(error){
    throw err;
   }
}

module.exports = {
    getMoviesModel
}

//#region exports