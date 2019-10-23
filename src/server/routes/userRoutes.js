const express = require('express');
const axios = require('axios');
const router = express.Router();
const config = require('config');

const serviceUrl = config.get('serviceUrl');

router.post('/', (req, res, next) => {
  return axios
    .post(`${serviceUrl}/user/`, req.body, { headers: req.headers })
    .then(response => res.send(response.data))
    .catch(err => next(err));
});

module.exports = router;
