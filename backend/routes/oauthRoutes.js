const router = require('express').Router();
const passport = require('../config/passport');

const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

// Helper: ensure session is saved before redirect
function handleOAuthSuccess(req, res) {
  req.session.save(() => {
    res.redirect(`${FRONTEND_URL}/dashboard`);
  });
}

// ===== GOOGLE =====
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: `${FRONTEND_URL}/login?error=oauth` }),
  handleOAuthSuccess
);

// ===== FACEBOOK =====
router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));
router.get(
  '/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: `${FRONTEND_URL}/login?error=oauth` }),
  handleOAuthSuccess
);

// ===== DIGILOCKER (optional) =====
router.get('/digilocker', passport.authenticate('digilocker'));
router.get(
  '/digilocker/callback',
  passport.authenticate('digilocker', { failureRedirect: `${FRONTEND_URL}/login?error=oauth` }),
  handleOAuthSuccess
);

// ===== "Who Am I" route =====
router.get('/me', (req, res) => {
  if (req.isAuthenticated()) {
    return res.json(req.user);
  }
  res.status(401).json({ message: 'Not authenticated' });
});

// ===== LOGOUT =====
router.post('/logout', (req, res) => {
  req.logout(err => {
    if (err) return res.status(500).json({ error: err.message });
    res.clearCookie('connect.sid', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    });
    res.json({ message: 'Logged out successfully' });
  });
});

module.exports = router;
