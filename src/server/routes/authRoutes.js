const express = require('express');
const axios = require('axios');
const router = express.Router();
const config = require('config');

const serviceUrl = config.get('serviceUrl');

router.post('/login', (req, res, next) => {
    return axios.post(`${serviceUrl}/login`, req.body)
        .then(response => res.send({ token: response.headers.authorization })).catch(err => next(err));
});

module.exports = router;
