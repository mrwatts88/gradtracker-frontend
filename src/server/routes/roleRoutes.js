const express = require('express');
const axios = require('axios');
const router = express.Router();
const config = require('config');

const serviceUrl = config.get('serviceUrl');

router.get('/', (req, res, next) =>
  axios
    .get(`${serviceUrl}/role/`, { headers: req.headers })
    .then(response => res.send(response.data))
    .catch(err => next(err))
);

module.exports = router;
