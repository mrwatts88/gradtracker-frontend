const express = require('express');
const axios = require('axios');
const router = express.Router();
const config = require('config');

const serviceUrl = config.get('serviceUrl');

router.put('/:id', (req, res, next) => {
  return axios
    .put(`${serviceUrl}/degreeProgram/${req.params.id}`, req.body, { headers: req.headers })
    .then(response => res.send(response.data))
    .catch(err => next(err));
});

router.get('/', (req, res, next) => {
  console.log(req.headers);
  return axios
    .get(`${serviceUrl}/degreeProgram/1`, { headers: req.headers })
    .then(response => res.send(response.data))
    .catch(err => next(err));
});

module.exports = router;
