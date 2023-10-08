const mysql = require('mysql');

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'Ryuzu',
});

// Handle connection errors
pool.on('error', (err) => {
  console.error('MySQL Pool Error:', err);
});

module.exports = pool;
