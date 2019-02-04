const express = require('express');
const axios = require('axios');
const router = express.Router();
const config = require('config');

const serviceUrl = config.get('serviceUrl');

router.get('/:value1/:value2', (req, res, next) => {
    return axios.get(`${serviceUrl}/concatenate/${req.params.value1}/${req.params.value2}`).then(response => res.status(200).send(response.data))
        .catch(err => next(err));
});

module.exports = router;
