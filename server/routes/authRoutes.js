const express = require('express');
const { register, login, getUser, updateProfileImage } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/', authMiddleware, getUser);
router.put('/profile-image', authMiddleware, updateProfileImage);

module.exports = router;
