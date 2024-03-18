'user strict';

var mysql = require('mysql');

//local mysql db connection
const connection = mysql.createConnection({
  // host: 'localhost',
  // user: 'root',
  // password: 'admin',
  // database: 'ecommerce'
  host:'sql6.freesqldatabase.com',
  user: 'sql6692269',
  password: 'VQvL3jU92w',
  database:'sql6692269'
});

connection.connect((err) => {
  if (err) {
    throw (err);
  }
  console.log('connected to db');
});

module.exports = connection;