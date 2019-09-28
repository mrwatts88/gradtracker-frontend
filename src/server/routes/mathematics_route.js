const express = require('express');
const axios = require('axios');
const router = express.Router();
const config = require('config');

const serviceUrl = config.get('serviceUrl');

router.get('/add/:value1/:value2', async (req, res, next) => {
    return axios.get(`${serviceUrl}/mathematics/add/${req.params.value1}/${req.params.value2}`)
        .then(response => res.send({ value: response.data }))
        .catch(err => next(err));
});

module.exports = router;
