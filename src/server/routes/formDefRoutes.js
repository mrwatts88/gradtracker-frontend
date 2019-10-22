const express = require('express');
const axios = require('axios');
const router = express.Router();
const config = require('config');

const serviceUrl = config.get('serviceUrl');

router.get('/:id', (req, res, next) => {
  return axios
    .get(`${serviceUrl}/formDef/${req.params.id}`, { headers: req.headers })
    .then(response => res.send(response.data))
    .catch(err => next(err));
});

router.get('/', (req, res, next) => {
  return axios
    .get(`${serviceUrl}/formDef/`, { headers: req.headers })
    .then(response => res.send(response.data))
    .catch(err => next(err));
});

router.post('/', (req, res, next) => {
  return axios
    .post(`${serviceUrl}/formDef/`, req.body, { headers: req.headers })
    .then(response => res.send(response.data))
    .catch(err => next(err));
});

module.exports = router;
