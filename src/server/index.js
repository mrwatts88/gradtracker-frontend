'use strict';

const express = require('express');
const router = new express.Router();

// routes
router.use('/auth', require('./routes/authRoutes'));
router.use('/user', require('./routes/userRoutes'));
router.use('/form', require('./routes/formRoutes'));
router.use('/formDef', require('./routes/formDefRoutes'));
router.use('/role', require('./routes/roleRoutes'));
router.use('/milestones', require('./routes/milestoneRoutes'));

module.exports = router;
