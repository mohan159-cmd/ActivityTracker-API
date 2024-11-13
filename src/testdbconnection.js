const sql = require('msnodesqlv8');

const connectionString = 'Driver={ODBC Driver 17 for SQL Server};Server={localhost};Database={EmployeeDB};Trusted_Connection={yes};';

sql.query(connectionString, 'SELECT * FROM Employees', (err, rows) => {
  if (err) {
    console.error(err);
  } else {
    console.log(rows);
  }
});
