// dbHelper.js
const sql = require('mssql');

// Database configuration
const config = {
  user: 'mohan159',       
  password: 'ABCD1234c@',    
  server: 'devsql159.database.windows.net',
  database: 'ActivityTrackerDB',
  options: {
    encrypt: true,               // Required for Azure
    trustServerCertificate: true // Change to false for production
  }
};

// Query function using mssql package
const query = (queryString) => {
    return new Promise((resolve, reject) => {
        sql.connect(config).then(pool => {
            return pool.request().query(queryString);
        }).then(result => {
            resolve(result.recordset);  // Return the rows from the query
        }).catch(err => {
            reject(err);  // Reject the promise on error
        });
    });
};

module.exports = { query };
