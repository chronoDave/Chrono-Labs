const fs = require('fs');
const path = require('path');

fs.mkdirSync(path.resolve(__dirname, '../dist'), { recursive: true });
fs.writeFileSync(
  path.resolve(__dirname, '../dist/robots.txt'),
  [
    'User-agent: *',
    'Allow: /',
    '',
    'User-agent: *',
    'Disallow: /assets',
    '',
    'User-agent: AdsBot-Google',
    'Disallow: /',
  ].join('\n')
);
