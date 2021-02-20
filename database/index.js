const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'ha',
  multipleStatements: true
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
  }
});

const getCities = (callback) => {
  connection.query('SELECT * FROM cities', (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(err, data);
    }
  })
}

module.exports = {
  getCities
}