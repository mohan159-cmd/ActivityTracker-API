const sql = require('mssql');

const config = {
  user: '',
  password: '',
  server: 'devsql159.database.windows.net',
  database: 'ActivityTrackerDB',
  options: {
    encrypt: true, 
    trustServerCertificate: true 
  }
};

sql.connect(config).then(pool => {
  return pool.request().query('SELECT * FROM Users');
}).then(result => {
  console.log(result.recordset);
}).catch(err => {
  console.error(err);
});
