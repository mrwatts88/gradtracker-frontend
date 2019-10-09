'use strict';

const express = require('express');
const router = new express.Router();

// routes
router.use('/auth', require('./routes/authRoutes'));
router.use('/form', require('./routes/formRoutes'));

module.exports = router;
