'use strict';

const express = require('express');
const router = new express.Router();

// routes
router.use('/auth', require('./routes/authRoutes'));

module.exports = router;
