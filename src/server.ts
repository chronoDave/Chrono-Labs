import http from 'http';
import path from 'path';
import fs from 'fs';

import { STATIC_ROUTES } from './routes';

interface Cache {
  [key: string]: Array<string | Buffer>
}

const PORT = parseInt(process.env.PORT || '7777', 10);
const CACHE_MAX_AGE = 60 * 60 * 24 * 365;

const cache: Cache = {};

const getMIMEType = (url: string) => {
  const ext = url.split('.').pop()?.toLowerCase();
  const type = [
    { ext: 'png', category: 'image' },
    { ext: 'gif', category: 'image' },
    { ext: 'jpg', category: 'image' },
    { ext: 'jpeg', category: 'image' },
    { ext: 'mp4', category: 'video' },
    { ext: 'md', category: 'text', type: 'markdown' },
    { ext: 'css', category: 'text' },
    { ext: 'js', category: 'text', type: 'javascript' },
    { ext: 'html', category: 'text' }
  ].find(t => t.ext === ext);

  if (!type) return 'text/plain';
  return `${type.category}/${type.type || type.ext}`;
};

const getBaseUrl = (url?: string) => {
  const client = path.resolve(__dirname, 'client');
  const root = path.resolve(__dirname, '..');

  if (!url) return path.resolve(client, 'index.html');
  if (url === 'robots.txt') return path.resolve(root, 'assets', url);
  if (url === 'sitemap.xml') return path.resolve(__dirname, 'sitemap.xml');
  if (/^assets/.test(url)) return path.resolve(root, url);
  if (/\.[^/]*$/.test(url)) return path.resolve(client, url);
  return path.resolve(client, 'index.html');
};

const getMetadata = (url?: string) => {
  const metadata = Object.values(STATIC_ROUTES).find(({ href }) => href === url);

  if (!metadata) return '<!-- Metadata -->';
  return [
    `<title>${metadata.title} | @chronoDave</title>`,
    '<!-- Metadata -->',
    `<meta name="title" content="${metadata.title} | @chronoDave">`,
    `<meta name="description" content="${metadata.description}">`,
    `<meta name="og:title" content="${metadata.title} | @chronoDave">`,
    `<meta name="og:description" content="${metadata.description}">`,
    `<meta name="og:image" content="${metadata.images.og}">`
  ].join('\n');
};

const staticRouter: http.RequestListener = (req, res) => {
  const url = getBaseUrl(req.url?.slice(1));
  const MIMEType = getMIMEType(url);

  // Metadata hydration
  if (!cache[url] && MIMEType.includes('html')) {
    const html = fs.readFileSync(url, { encoding: 'utf-8' })
      .replace('<!-- Metadata -->', getMetadata(req.url));

    cache[url] = [Buffer.from(html)];
  }

  if (cache[url]) {
    res.writeHead(200, {
      'Content-Type': MIMEType,
      'Cache-Control': `max-age=${CACHE_MAX_AGE}`
    });

    cache[url].forEach(chunk => res.write(chunk));

    res.end();
  } else {
    const stream = fs.createReadStream(url);

    stream.on('error', err => {
      // console.log(err);

      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end('An unknown error has occurred');
    });

    stream.on('ready', () => {
      // Only cache in production
      if (process.env.NODE_ENV !== 'development') cache[url] = [];

      res.writeHead(200, {
        'Content-Type': MIMEType,
        'Cache-Control': `max-age=${CACHE_MAX_AGE}`
      });
    });

    stream.on('data', chunk => {
      // Only cache in production
      if (process.env.NODE_ENV !== 'development') cache[url].push(chunk);
    });

    stream.pipe(res);
  }
};

http
  .createServer(staticRouter)
  .listen(PORT, '0.0.0.0');
