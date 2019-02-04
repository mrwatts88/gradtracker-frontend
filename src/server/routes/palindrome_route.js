const express = require('express');
const axios = require('axios');
const router = express.Router();
const config = require('config');

const serviceUrl = config.get('serviceUrl');

router.get('/:palindrome', (req, res, next) => {
    return axios.get(`${serviceUrl}/palindrome/${req.params.palindrome}`)
        .then(response => res.send({ result: response.data })).catch(err => next(err));
});

module.exports = router;
