
const express = require('express');
const router = express.Router();
const { authenticateUser } = require('../middleware/authMiddleware');

router.post('/login', authenticateUser);

module.exports = router;
