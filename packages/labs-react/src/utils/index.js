export const castArray = value => (Array.isArray(value) ? value : [value]);
export const shouldRenderClass = propGroup => Object.values(propGroup)
  .filter(value => value)
  .length !== 0;
