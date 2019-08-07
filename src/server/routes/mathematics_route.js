const express = require('express');
const axios = require('axios');
const router = express.Router();
const config = require('config');

const serviceUrl = config.get('serviceUrl');

router.get('/add/:value1/:value2', async (req, res, next) => {
    return  axios.get(`${serviceUrl}/mathematics/add/${req.params.value1}/${req.params.value2}`)
    .then(response => res.status(200).send({value: response.data}))
    .catch(err => next(err));
});

router.get('/subtract/:value1/:value2', async (req, res, next) => {
    return  axios.get(`${serviceUrl}/mathematics/subtract/${req.params.value1}/${req.params.value2}`)
    .then(response => res.status(200).send({value: response.data}))
    .catch(err => next(err));
});

router.get('/multiply/:value1/:value2', async (req, res, next) => {
    return  axios.get(`${serviceUrl}/mathematics/multiply/${req.params.value1}/${req.params.value2}`)
    .then(response => res.status(200).send({value: response.data}))
    .catch(err => next(err));
});

router.get('/divide/:value1/:value2', async (req, res, next) => {
    return  axios.get(`${serviceUrl}/mathematics/divide/${req.params.value1}/${req.params.value2}`)
    .then(response => res.status(200).send({value: response.data}))
    .catch(err => next(err));
});

router.get('/squareRoot/:value1', async (req, res, next) => {
    return  axios.get(`${serviceUrl}/mathematics/squareRoot/${req.params.value1}`)
    .then(response => res.status(200).send({value: response.data}))
    .catch(err => next(err));
});


module.exports = router;