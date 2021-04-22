const fs = require('fs');
const path = require('path');

const { STATIC_ROUTES } = require('../src/routes');

const now = new Date();
const date = [
  now.getFullYear(),
  `${now.getMonth() + 1}`.padStart(2, '0'),
  now.getDate()
].join('-');

fs.mkdirSync(path.resolve(__dirname, '../dist'), { recursive: true });
fs.writeFileSync(
  path.resolve(__dirname, '../dist/sitemap.xml'),
  [
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    Object.values(STATIC_ROUTES)
      .map(({ name }) => [
        '\t<url>',
        `\t<loc>https://chronodave.com/${name}</loc>`,
        `\t<lastmod>${date}</lastmod>`,
        '</url>'
      ].join('\n\t'))
      .join('\n'),
    '</urlset>'
  ].join('\n')
);
