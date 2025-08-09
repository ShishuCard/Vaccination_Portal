require('dotenv').config();
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  console.log("JWT Secret:", process.env.JWT_SECRET);

  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );
};

module.exports = generateToken;
