// dbHelper.js
const sql = require('msnodesqlv8');

const connectionString = 'Driver={ODBC Driver 17 for SQL Server};Server={localhost};Database={EmployeeDB};Trusted_Connection={yes};';

const query = (queryString) => {
    return new Promise((resolve, reject) => {
        sql.query(connectionString, queryString, (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
};

module.exports = { query };
