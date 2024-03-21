// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { authorizeUser } = require('../middleware/authzMiddleware');

router.get('/', authorizeUser(['user']), (req, res) => {
 // // This route is accessible to authenticated users with 'user' role
  res.send('User Route - Read Access');
});

module.exports = router;
