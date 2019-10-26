const express = require('express');
const axios = require('axios');
const router = express.Router();
const config = require('config');

const serviceUrl = config.get('serviceUrl');

router.post('/', (req, res, next) =>
  axios
    .post(`${serviceUrl}/form/`, req.body, { headers: req.headers })
    .then(response => res.send(response.data))
    .catch(err => next(err))
);

router.get('/user/:id', (req, res, next) =>
  axios
    .get(`${serviceUrl}/form/user/${req.params.id}`, { headers: req.headers })
    .then(response => res.send(response.data))
    .catch(err => next(err))
);

module.exports = router;
