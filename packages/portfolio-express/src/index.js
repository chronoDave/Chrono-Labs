const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');

const port = process.env.PORT || 7777;
const client = path.resolve(__dirname, '../client');
const assets = path.resolve(__dirname, '../assets');

express()
  .use(helmet())
  .use(cors())
  .use(express.static(client))
  .use('/assets', express.static(assets))
  .use('/', (req, res) => {
    if (process.env.NODE_ENV === 'development') {
      res.redirect('http://localhost:3000');
    } else {
      res.sendFile('index.html', { root: client });
    }
  })
  .listen(port, () => console.log(`Listening on port: ${port}`));
