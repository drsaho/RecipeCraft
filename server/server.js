const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const authRoutes = require('./routes/loginRoutes'); 
const userRoutes = require('./routes/userRoutes');
const recipeRoutes = require('./routes/recipeRoutes');  

// Initialize Express app
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch((err) => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });

// Use Routes
app.use('/api/users', userRoutes); 
app.use('/api/auth', authRoutes);
app.use('/api/recipes', recipeRoutes);  

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/build/index.html'));
    });
}

// Custom Error Handling Middleware
app.use((err, req, res, next) => {
    console.error('Error stack:', err.stack);
    res.status(500).json({
        message: 'Something went wrong on the server.',
        error: process.env.NODE_ENV === 'development' ? err.message : {},
    });
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
