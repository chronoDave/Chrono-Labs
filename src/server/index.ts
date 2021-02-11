import express from 'express';
import path from 'path';

const port = parseInt(process.env.PORT || '7777', 10);
const host = process.env.NODE_ENV === 'development' ?
  '0.0.0.0' :
  'localhost';
const pathClient = path.resolve(__dirname, '../client');
const pathMarkdown = path.resolve(__dirname, '../assets/markdown');

express()
  .use('/markdown', express.static(pathMarkdown))
  .use(express.static(pathClient))
  .use('/', (_, res) => res.sendFile('index.html', { root: pathClient }))
  .listen(port, host, () => console.info(`Listening on: ${host}:${port}`));
