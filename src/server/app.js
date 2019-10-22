'use strict';

const bodyParser = require('body-parser');
const chalk = require('chalk');
const config = require('config');
const express = require('express');
const fs = require('fs');
const http = require('http');
const https = require('https');
const morgan = require('morgan');
const path = require('path');
const server = require('./');

const app = express();
const appEnv = config.get('appEnv');
const contextRoot = config.get('contextRoot');
const buildAssetsDir = path.resolve(__dirname, '..', '..', `www-${appEnv}`);

let httpServer = null;
let httpsServer = null;

// Does the service need an api key?
// Here is a good spot to do this!
// axios.defaults.headers.common['apikey'] = process.env.MY_VARIABLE_NAME;

// logging middleware
app.use(morgan('dev'));

// body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// prepend '/api' to URIs
app.use(`${contextRoot}/api`, server);

// serve static files from public
app.use(contextRoot, express.static(buildAssetsDir));

// request any page and receive index.html
app.get(`${contextRoot}*`, (req, res) => res.sendFile(`${buildAssetsDir}/index.html`));

if (process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase() === 'production') {
  try {
    const certs = {
      cert: fs.readFileSync(process.env.SSL_CERT_FILE, 'utf8'),
      key: fs.readFileSync(process.env.SSL_KEY_FILE, 'utf8'),
    };

    httpsServer = https.createServer(certs, app).listen(config.get('httpsListenerPort'), () => {
      const host = httpsServer.address().address;
      const port = httpsServer.address().port;
      console.log(`server listening at ${host}:${port}`);
    });
  } catch (error) {
    if (error.code === 'ENOENT') {
      const parsedError = new Error('Service is running inside kube cluster, but certificates are not found.');
      parsedError.code = 'ENOENT';
      throw parsedError;
    } else {
      const parsedError = new Error('Service is running inside kube cluster, but an unknown error occured');
      parsedError.code = 'UNKNOWN_ERR';
      throw parsedError;
    }
  }
}

httpServer = http.createServer(app).listen(config.get('httpListenerPort'), () => {
  const host = httpServer.address().address;
  const port = httpServer.address().port;
  console.log(chalk.cyan('server listening at'), chalk.yellow(`${host}:${port}`));
});

process.on('SIGTERM', () => {
  if (httpServer) {
    httpServer.close(() => {
      console.log.info(chalk.red('SIGTERM issued...app is shutting down'));
      process.exit(0);
    });
  }
  if (httpsServer) {
    httpsServer.close(() => {
      console.log.info(chalk.red('SIGTERM issued...app is shutting down'));
      process.exit(0);
    });
  }
});

module.exports = app;
