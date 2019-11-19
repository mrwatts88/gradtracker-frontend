const express = require('express');
const axios = require('axios');
const router = express.Router();
const config = require('config');

const serviceUrl = config.get('serviceUrl');

router.get('/', (req, res, next) =>
  axios
    .get(`${serviceUrl}/role/`, { headers: req.headers })
    .then(response => res.send(response.data))
    .catch(err => next(err))
);

router.post('/', (req, res, next) =>
  axios
    .post(`${serviceUrl}/role/`, req.body, { headers: req.headers })
    .then(response => res.send(response.data))
    .catch(err => next(err))
);

router.put('/:id', (req, res, next) => {
  return axios
    .put(`${serviceUrl}/role/${req.params.id}`, req.body, { headers: req.headers })
    .then(response => res.send(response.data))
    .catch(err => next(err));
}
);

module.exports = router;
