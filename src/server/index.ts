import express from 'express';
import path from 'path';

const port = parseInt(process.env.PORT || '7777', 10);
const client = path.resolve(__dirname, '../client');
const assets = path.resolve(__dirname, '../../assets');

express()
  .use('/assets', express.static(assets))
  .use(express.static(client))
  .use('/', (_, res) => res.sendFile('index.html', { root: client }))
  .listen(port, '0.0.0.0', () => console.info(`Listening on: ${port}`));
