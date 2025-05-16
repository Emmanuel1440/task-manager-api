const { swaggerUi, specs } = require('./swagger');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./config/db');

// Models
const User = require('./models/User');
const Task = require('./models/Task');

// Routes
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json()); // Important for parsing JSON request bodies

// ✅ Routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// ✅ Health check endpoint (optional but useful)
app.get('/', (req, res) => {
  res.send('Task Manager API is running 🚀');
});

// ✅ DB Connection & Sync
sequelize.authenticate()
  .then(() => {
    console.log('✅ PostgreSQL connected');
    return sequelize.sync({ alter: true }); // Set to { force: true } to reset DB
  })
  .then(() => {
    console.log('✅ All models were synchronized successfully.');
  })
  .catch((err) => {
    console.error('❌ DB connection or sync error:', err.message);
  });

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
