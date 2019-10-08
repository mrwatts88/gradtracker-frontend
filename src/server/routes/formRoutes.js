const express = require('express');
const axios = require('axios');
const router = express.Router();
const config = require('config');

const serviceUrl = config.get('serviceUrl');

router.post('/form', (req, res, next) => {
    return axios.post(`${serviceUrl}/form`, req.body)
        .then(response => res.send({ token: response.headers.authorization })).catch(err => next(err));
});

module.exports = router;
