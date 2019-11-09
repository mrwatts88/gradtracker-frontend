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

router.put('/:id', (req, res, next) =>
  axios
    .put(`${serviceUrl}/form/${req.params.id}`, req.body, { headers: req.headers })
    .then(response => res.send(response.data))
    .catch(err => next(err))
);

router.get('/panther_id/:id', (req, res, next) =>
  axios
    .get(`${serviceUrl}/form/panther_id/${req.params.id}`, { headers: req.headers })
    .then(response => res.send(response.data))
    .catch(err => next(err))
);

router.get('/formDef/:id', (req, res, next) =>
  axios
    .get(`${serviceUrl}/form/formDef/${req.params.id}`, { headers: req.headers })
    .then(response => res.send(response.data))
    .catch(err => next(err))
);

module.exports = router;
