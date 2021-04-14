import http from 'http';
import path from 'path';
import fs from 'fs';

interface Cache {
  [key: string]: Array<string | Buffer>
}

const PORT = parseInt(process.env.PORT || '7777', 10);

const cache: Cache = {};

const getMIMEType = (url: string) => {
  switch (url.split('.').pop()?.toLowerCase()) {
    case 'png':
      return 'image/png';
    case 'gif':
      return 'image/gif';
    case 'md':
      return 'text/markdown';
    case 'mp4':
      return 'video/mp4';
    case 'jpg':
    case 'jpeg':
      return 'image/jpeg';
    case 'css':
      return 'text/css';
    case 'js':
      return 'text/javascript';
    default:
      return 'text/plain';
  }
};

const parseUrl = (url: string) => {
  const isResource = /\.[^/]*$/.test(url);
  const isAsset = /^assets/.test(url);

  if (isAsset) {
    return ({
      filePath: path.resolve(__dirname, '../', url),
      MIMEType: getMIMEType(url)
    });
  }
  if (isResource) {
    return ({
      filePath: path.resolve(__dirname, 'client', url),
      MIMEType: getMIMEType(url)
    });
  }
  return ({
    filePath: path.resolve(__dirname, 'client/index.html'),
    MIMEType: 'text/html'
  });
};

const staticRouter: http.RequestListener = (req, res) => {
  if (req.url) {
    const { filePath, MIMEType } = parseUrl(req.url.slice(1));

    if (!cache[filePath]) {
      const fileStream = fs.createReadStream(filePath);

      fileStream.on('error', () => {
        res.statusCode = 404;
        res.end();
      });

      // Only cache on production
      if (process.env.NODE_ENV !== 'development') {
        fileStream.on('ready', () => {
          cache[filePath] = [];
        });

        fileStream.on('data', chunk => {
          cache[filePath].push(chunk);
        });
      }

      res.statusCode = 200;
      res.setHeader('Content-Type', MIMEType);

      fileStream.pipe(res);
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', MIMEType);

      cache[filePath].forEach(chunk => res.write(chunk));

      res.end();
    }
  } else {
    res.statusCode = 404;
    res.end();
  }
};

http
  .createServer(staticRouter)
  .listen(PORT, '0.0.0.0');
