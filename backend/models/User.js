const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, sparse: true }, // Local username
  email: { type: String, unique: true, sparse: true },    // Common for OAuth
  password: { type: String }, // Only for local auth
  role: { type: String, enum: ['user', 'admin'], default: 'user' },

  // OAuth provider fields
  googleId: { type: String, unique: true, sparse: true },
  facebookId: { type: String, unique: true, sparse: true },
  digilockerId: { type: String, unique: true, sparse: true },

  createdAt: { type: Date, default: Date.now }
});

// Hash password before saving (only if password is modified)
userSchema.pre('save', async function () {
  if (!this.isModified('password') || !this.password) return;
  this.password = await bcrypt.hash(this.password, 10);
});

// Compare password for local login
userSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
