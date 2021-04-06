import { injectGlobal } from '@emotion/css';

export const ThemeProvider = {
  oncreate: () => injectGlobal({
    body: {
      backgroundColor: '#fff',
      margin: 0
    }
  }),
  view: () => null
};
