import express from 'express';
import path from 'path';

const port = process.env.PORT || 7777;
const pathClient = path.resolve(__dirname, '../client');

express()
  .use(express.static(pathClient))
  .use('/', (_, res) => res.sendFile('index.html', { root: pathClient }))
  .listen(port, () => console.log(`Listening on port: ${port}`));
