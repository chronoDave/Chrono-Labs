import http from 'http';
import path from 'path';

import createCache from './cache';

const port = parseInt(process.env.PORT || '7777', 10);

const cache = {
  images: createCache(path.resolve(__dirname, '../../assets/images')),
  markdown: createCache(path.resolve(__dirname, '../../assets/markdown')),
  videos: createCache(path.resolve(__dirname, '../../assets/videos')),
  client: createCache(path.resolve(__dirname, '../client'))
};

const getMIMEType = (url?: string) => {
  if (!url) return 'text/html';

  const requestType = url.split('.').pop();

  if (requestType === 'js') return 'text/javascript';
  return `text/${requestType}`;
};

http
  .createServer((req, res) => {
    const reqUrl = req.url?.slice(1);

    if (reqUrl) {
      const [, directory, file] = reqUrl.split(/\\|\//);

      res.setHeader('Content-Type', getMIMEType(file || reqUrl));
      res.writeHead(200);

      switch (directory) {
        case 'images':
          res.end(cache.images[file]);
          break;
        case 'markdown':
          res.end(cache.markdown[file]);
          break;
        case 'videos':
          res.end(cache.videos[file]);
          break;
        default:
          res.end(cache.client[reqUrl]);
      }
    } else {
      res.end(cache.client['index.html']);
    }
  })
  .listen(port, '0.0.0.0', () => {
    console.info(`Listening on: ${port}`);
  });

// http
//   .createServer((req, res) => {
//     fs.readFile(path.resolve(__dirname, '../client/index.html'))
//       .then(html => {
//         res.setHeader('Content-Type', 'text/html');
//         res.writeHead(200);
//         res.end(html);
//       })
//       .catch(err => {
//         res.writeHead(500);
//         res.end(err);
//       });
//   })
//   .listen(port, '0.0.0.0', () => console.info(`Listening on: ${port}`));
