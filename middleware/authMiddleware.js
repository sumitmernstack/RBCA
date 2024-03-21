
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const authenticateUser = async (req, res, next) => {
  try {
    
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'Authentication failed. Token not provided.' });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.userId;

 
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(401).json({ message: 'Authentication failed. User not found.' });
    }
  req.user = user;
    next(); 
  } catch (error) {
    return res.status(401).json({ message: 'Authentication failed. Invalid token.' });
  }
};

module.exports = {
  authenticateUser
};
