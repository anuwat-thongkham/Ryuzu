const mysql = require('mysql');

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'Ryuzu',
};

const pool = mysql.createPool(dbConfig);

module.exports = pool;
