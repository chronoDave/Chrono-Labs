const express = require('express');
const helmet = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

// Routers
const apiRouter = require('./routers/api.router');

// Utils
const { subRouter } = require('./utils');

const port = process.env.PORT || 7777;
const origin = [];

if (process.env.NODE_ENV === 'development') origin.push('http://localhost:5000');

// Setup
express()
  .set('subdomain offset', 1)
  .use(helmet())
  .use(cors())
  .use(bodyParser.json())
  // Routing
  .use(subRouter('api', apiRouter))
  .use(express.static(path.resolve(__dirname, '../client')))
  // eslint-disable-next-line no-console
  .listen(port, () => console.log(`Listening on port: ${port}`));
