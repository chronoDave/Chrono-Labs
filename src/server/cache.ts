import walk from '@chronocide/fs-walk';
import path from 'path';
import fs from 'fs';

export default (root: string) => {
  const cache: { [key: string]: Buffer } = {};

  walk(root)
    .forEach(file => {
      const key = file.split(path.sep).pop();

      if (key) cache[key] = fs.readFileSync(file);
    });

  return cache;
};
