
const jwt = require('jsonwebtoken');

const authorizeUser = (roles) => {
  return async (req, res, next) => {
    try {
      
      const token = req.headers.authorization;

      if (!token) {
        return res.status(401).json({ message: 'Authorization failed. Token not provided.' });
      }

      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

      if (!roles.includes(decodedToken.role)) {
        return res.status(403).json({ message: 'Authorization failed. Insufficient permissions.' });
      }

      next(); 
    } catch (error) {
      return res.status(401).json({ message: 'Authorization failed. Invalid token.' });
    }
  };
};

module.exports = {
  authorizeUser
};
