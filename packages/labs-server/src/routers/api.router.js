const { Router } = require('express');
const path = require('path');

module.exports = Router()
  .get('*', (req, res) => {
    res.sendFile('index.html', { root: path.resolve(__dirname, '../') });
  });
