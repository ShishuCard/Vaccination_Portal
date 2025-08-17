const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../models/User');

// ======== ENV CHECK ========
['GOOGLE_CLIENT_ID', 'GOOGLE_CLIENT_SECRET', 'FACEBOOK_APP_ID', 'FACEBOOK_APP_SECRET', 'BACKEND_URL']
  .forEach((key) => {
    if (!process.env[key]) {
      console.warn(`⚠️ Warning: Missing environment variable "${key}" in .env`);
    }
  });

// ======== SERIALIZE & DESERIALIZE ========
passport.serializeUser((user, done) => {
  done(null, user._id.toString());
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id).lean();
    if (!user) return done(null, false);
    done(null, user);
  } catch (err) {
    console.error('❌ Error in deserializeUser:', err);
    done(err, null);
  }
});

// ======== GOOGLE STRATEGY ========
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${process.env.BACKEND_URL}/api/auth/google/callback`,
      passReqToCallback: true, // ensures we can access req for session usage
    },
    async (req, accessToken, refreshToken, profile, done) => {
      try {
        // 1. Check if user exists by Google ID
        let user = await User.findOne({ googleId: profile.id });
        if (user) return done(null, user);

        // 2. Check if email exists already
        const email = profile.emails?.[0]?.value?.toLowerCase();
        if (email) {
          user = await User.findOne({ email });
          if (user) {
            // link Google account to existing user
            user.googleId = profile.id;
            await user.save();
            return done(null, user);
          }
        }

        // 3. Create username fallback
        const usernameFallback =
          profile.displayName || email?.split('@')[0] || `user_${Date.now()}`;

        // 4. Create a new user
        const newUser = new User({
          googleId: profile.id,
          username: usernameFallback,
          email: email || null,
        });

        const savedUser = await newUser.save();
        return done(null, savedUser);
      } catch (err) {
        console.error('Google Auth Error:', err);
        return done(err, null);
      }
    }
  )
);

// ======== FACEBOOK STRATEGY ========
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: `${process.env.BACKEND_URL}/api/auth/facebook/callback`,
      profileFields: ['id', 'displayName', 'emails', 'photos'],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ facebookId: profile.id });

        if (!user) {
          user = await User.create({
            facebookId: profile.id,
            username: profile.displayName,
            email: profile.emails?.[0]?.value?.toLowerCase() || '',
            picture: profile.photos?.[0]?.value || '',
          });
        }

        done(null, user);
      } catch (err) {
        console.error('❌ Facebook Strategy Error:', err);
        done(err, null);
      }
    }
  )
);

module.exports = passport;
