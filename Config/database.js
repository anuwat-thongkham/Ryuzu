const mysql = require('mysql');

const dbConfig = {
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'Ryuzu',
};

const pool = mysql.createPool(dbConfig);

module.exports = pool;
