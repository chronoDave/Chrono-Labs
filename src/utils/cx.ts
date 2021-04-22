export const cx = (...args: Array<string | undefined | boolean>) => [...args]
  .filter(className => className)
  .join(' ');
