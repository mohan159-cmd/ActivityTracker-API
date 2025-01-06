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

const query = (queryString) => {
    return new Promise((resolve, reject) => {
        sql.connect(config)
            .then(pool => {
                // Perform a simple check query to trigger database resume if needed
                return pool.request().query('SELECT 1');
            })
            .then(() => {
                // Run the actual query after the resume trigger
                return sql.query(queryString);
            })
            .then(result => {
                resolve(result.recordset);  // Return the rows from the query
            })
            .catch(err => {
                reject(err);  // Reject the promise on error
            });
    });
};


module.exports = { query };
