const mysql = require('mysql');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser'); // Add this line

app.use(cors());
app.use(bodyParser.json()); // Add this line

// Create a connection pool
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'Ryuzu',
});

app.post('/login', (req, res) => {
  const { email, password } = req.body; // Use req.body to access the request data

  // Check if email and password are provided
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  // Use a query to check if the email and password match in your database
  db.query("SELECT * FROM Customer WHERE CustomerEmail = ? AND CustomerPassword = ?", [email, password], (error, results) => {
    if (error) {
      console.error('MySQL query error:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }

    // Check if any results were returned from the database
    if (results.length === 0) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Authentication successful - you can generate a token here if needed
    res.status(200).json({ message: 'Authentication successful', user: results[0] });
  });
});

// ... Other routes and server setup
