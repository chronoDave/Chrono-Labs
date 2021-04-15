import fs from 'fs';
import path from 'path';

import { STATIC_ROUTES } from '../src/routes';

const now = new Date();
const zeroPad = (n: number) => (n < 10 ? `0${n}` : n);

const date = [
  now.getFullYear(),
  zeroPad(now.getMonth() + 1),
  now.getDate()
].join('-');

fs.writeFileSync(
  path.resolve(__dirname, '../dist/sitemap.xml'),
  [
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    Object.values(STATIC_ROUTES)
      .map(({ href }) => [
        '\t<url>',
        `\t<loc>https://chronodave.com${href}</loc>`,
        `\t<lastmod>${date}</lastmod>`,
        '</url>'
      ].join('\n\t'))
      .join('\n'),
    '</urlset>'
  ].join('\n')
);
