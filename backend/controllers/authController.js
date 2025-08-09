const generateToken = require('../../src/utils/generateToken');


const User = require('../models/User.js');

exports.register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = generateToken(user);
    res.status(201).json({ token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  const token = generateToken(user);
  res.json({ token });
};
