const express = require('express');
const axios = require('axios');
const router = express.Router();
const config = require('config');

const serviceUrl = config.get('serviceUrl');

router.post('/', (req, res, next) =>
    axios.post(`${serviceUrl}/auth`, req.body)
        .then(response => res.send({ token: response.headers.authorization }))
        .catch(err => next(err)));

module.exports = router;
