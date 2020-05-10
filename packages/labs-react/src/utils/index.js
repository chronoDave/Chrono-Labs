export const castArray = value => (Array.isArray(value) ? value : [value]);
export const shouldRenderClass = propGroup => Object.values(propGroup)
  .filter(value => value)
  .length !== 0;
export const getColorScheme = () => {
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) return 'dark';
  return 'light';
};
