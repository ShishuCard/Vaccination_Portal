require('dotenv').config({ path: '../.env' });
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const { protect, authorize } = require('./middlewares/authMiddleware')


const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/vaccine_portal');

app.use('/api/auth', authRoutes);

app.get('/user/dashboard', protect, (req, res) => {
  res.send(`Hello ${req.user.role} user!`);
});

app.get('/admin/dashboard', protect, authorize('admin'), (req, res) => {
  res.send('Admin dashboard');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
