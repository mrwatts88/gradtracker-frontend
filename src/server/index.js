'use strict';

const express = require('express');
const router = new express.Router();

// routes
router.use('/auth', require('./routes/authRoutes'));
router.use('/user', require('./routes/userRoutes'));
router.use('/form', require('./routes/formRoutes'));
router.use('/formDef', require('./routes/formDefRoutes'));

module.exports = router;
