const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const authRoutes = require('./routes/oauthRoutes');
const userRoutes = require('./routes/userRoutes');
const { protect, authorize } = require('./middlewares/authMiddleware');
const passport = require('./config/passport');

const app = express();

// ====== Security & Logging ======
app.use(helmet());
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);
app.use(morgan('dev'));

// ====== Body Parser ======
app.use(express.json());

// ====== Rate Limiting ======
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP, please try again later.',
});
app.use(limiter);

// ====== MongoDB Connection ======
mongoose
  .connect(process.env.MONGO_URI || 'mongodb://localhost:27017/vaccine_portal')
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// ====== Session ======
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'supersecret',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI || 'mongodb://localhost:27017/vaccine_portal',
      ttl: 24 * 60 * 60,
    }),
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

// ====== Passport ======
app.use(passport.initialize());
app.use(passport.session());

// ====== Routes ======
app.use('/api/auth', authRoutes);
app.use('/user', userRoutes);

// Get logged-in user
app.get('/api/auth/me', (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Not authenticated' });
  }
  res.json(req.user);
});

// Protected routes
app.get('/user/dashboard', protect, (req, res) => {
  res.send(`Hello ${req.user.role} user!`);
});

app.get('/admin/dashboard', protect, authorize('admin'), (req, res) => {
  res.send('Admin dashboard');
});

// Health check
app.get('/', (req, res) => {
  res.send('Vaccine Portal API is running...');
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('❌ Error:', err.stack);
  res.status(500).json({ message: 'Server error', error: err.message });
});
app.use(cors());
// ====== Start Server ======
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`));
