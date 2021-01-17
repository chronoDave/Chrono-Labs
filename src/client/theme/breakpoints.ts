const value = {
  xs: 320,
  sm: 480,
  md: 720,
  lg: 960,
  xl: 1280
};

const query = {
  minWidth: 'min-width',
  minHeight: 'min-height',
  maxWidth: 'max-width',
  maxHeight: 'max-height'
};

export default {
  value,
  query,
  create: (
    queryKey: keyof typeof query,
    valueKey: keyof typeof value
  ) => `@media (${query[queryKey]}: ${value[valueKey] - (queryKey.includes('max') ? 1 : 0)}px)`
};
