// index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./config/db');

const { swaggerUi, specs } = require('./swagger');

// Models
const User = require('./models/User');
const Task = require('./models/Task');

// Routes
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Swagger docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// Health check route
app.get('/', (req, res) => {
  res.send('✅ Task Manager API is running');
});

// Database connection and sync
sequelize.authenticate()
  .then(() => {
    console.log('✅ PostgreSQL connected');
    return sequelize.sync({ alter: true });
  })
  .then(() => {
    console.log('✅ All models synchronized successfully');
  })
  .catch((err) => {
    console.error('❌ DB connection or sync error:', err.message);
  });

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
