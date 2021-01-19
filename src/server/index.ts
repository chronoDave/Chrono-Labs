import express from 'express';
import path from 'path';

const port = parseInt(process.env.PORT || '7777', 10);
const host = process.env.NODE_ENV === 'development' ?
  '0.0.0.0' :
  'localhost';
const pathClient = path.resolve(__dirname, '../client');

express()
  .use(express.static(pathClient))
  .use('/', (_, res) => res.sendFile('index.html', { root: pathClient }))
  .listen(port, host, () => console.log(`Listening on: ${host}:${port}`));
