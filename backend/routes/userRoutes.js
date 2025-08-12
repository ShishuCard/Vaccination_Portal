const express = require('express');
const router = express.Router();

// Middleware to ensure authentication
function ensureAuth(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: 'Not authorized' });
}

// GET: Dashboard (protected)
router.get('/dashboard', ensureAuth, (req, res) => {
  res.json({
    message: 'Welcome to your dashboard',
    user: req.user
  });
});

// GET: Current user info
router.get('/me', (req, res) => {
  if (req.isAuthenticated()) {
    return res.json(req.user);
  }
  res.status(401).json({ message: 'Not authenticated' });
});

// POST: Logout
router.post('/logout', (req, res) => {
  req.logout(err => {
    if (err) {
      console.error('Logout error:', err);
      return res.status(500).json({ message: 'Logout failed' });
    }
    res.clearCookie('connect.sid');
    res.json({ message: 'Logged out successfully' });
  });
});

module.exports = router;
