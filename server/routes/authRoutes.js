// Auth routes
const express = require('express');
const router = express.Router();
const { register, login, getUser } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

// Register a new user
router.post('/register', register);

// Login an existing user
router.post('/login', login);

// Get the logged-in user's info (protected route)
router.get('/', authMiddleware, getUser);

module.exports = router;
