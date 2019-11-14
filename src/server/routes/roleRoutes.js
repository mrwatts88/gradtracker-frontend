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
    .post(`${serviceUrl}/role/`, { headers: req.headers })
    .then(response => res.send(response.data))
    .catch(err => next(err))
);

router.put('/:id', (req, res, next) => {
  console.log(`${serviceUrl}/role/${req.params.id}`);
  console.log(req.headers);
  return axios
    .put(`${serviceUrl}/role/${req.params.id}`, { headers: req.headers })
    .then(response => res.send(response.data))
    .catch(err => next(err));
}
);

module.exports = router;
