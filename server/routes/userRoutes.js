const express = require('express');
const { register, login, getUser, updateProfileImage } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', register);  // Register a new user
router.post('/login', login);  // Log in a user
router.get('/current', authMiddleware, getUser);  // Get current logged-in user's info
router.put('/profile-image', authMiddleware, updateProfileImage);  // Update profile image

module.exports = router;
