const express = require('express');
const axios = require('axios');
const router = express.Router();
const config = require('config');

const serviceUrl = config.get('serviceUrl');

router.get('/', (req, res, next) => {
  console.log('in get all forms');
  return axios
    .get(`${serviceUrl}/formDef/`, req.body)
    .then(response => {
      return res.send(response.data);
    })
    .catch(err => {
      next(err);
    });
});

router.post('/', (req, res, next) => {
  console.log('in formdef post');
  return axios
    .post(`${serviceUrl}/formDef/`, req.body)
    .then(response => {
      console.log('in response');
      return res.send(response.data);
    })
    .catch(err => next(err));
});
module.exports = router;
