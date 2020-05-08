const express = require('express');
const helmet = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 7777;
const origin = [
  'https://www.chronolabs.dev',
  'https://chronolabs.dev'
];

if (process.env.NODE_ENV === 'development') origin.push('http://localhost:5000');

// Setup
express()
  .use(helmet())
  .use(cors({ origin }))
  .use(bodyParser.json())
  // Routing
  .use(express.static('client'))
  .use('/api', (req, res) => res.sendFile('index.html', { root: __dirname }))
  .use('*', (req, res) => res.sendFile('index.html', { root: path.resolve(__dirname, '../client') }))
  // eslint-disable-next-line no-console
  .listen(port, () => console.log(`Listening on port: ${port}`));
