const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const pool = require('./config/dbPool'); // Update the path to your pool configuration

// Handle POST request for user login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Retrieve user data from the database
  const query = 'SELECT * FROM Customer WHERE CustomerEmail = ?';
  pool.query(query, [email], (err, results) => {
    if (err) {
      console.error('Error querying the database:', err);
      return res.status(500).json({ message: 'Server error' });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const user = results[0];

    // Compare the provided password with the password from the database
    if (password !== user.CustomerPassword) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate a JWT token for the user
    const token = jwt.sign({ userId: user.CustomerID }, 'your-secret-key', {
      expiresIn: '1h', // Token expiration time
    });

    res.status(200).json({ message: 'Login successful', token });
  });
});


module.exports = router;
