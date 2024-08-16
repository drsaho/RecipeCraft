const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profileImageUrl: { type: String },
});

// Hash password before saving
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Compare input password with hashed password in the database
UserSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// Generate JWT token
UserSchema.methods.generateAuthToken = function () {
    return jwt.sign({ user: { id: this._id } }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

module.exports = mongoose.model('User', UserSchema);
