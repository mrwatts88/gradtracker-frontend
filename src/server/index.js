'use strict';

const express = require('express');
const router = new express.Router();

// routes
router.use('/concatenate', require('./routes/concatenation_route'));
router.use('/mathematics', require('./routes/mathematics_route'));
router.use('/auth', require('./routes/authRoutes'));

module.exports = router;
