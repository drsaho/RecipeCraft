const express = require('express');
const { register, login, updateProfileImage } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', register);  // Register a new user
router.post('/login', login);  // User login
router.put('/profile-image', authMiddleware, updateProfileImage);  // Update profile image

module.exports = router;
