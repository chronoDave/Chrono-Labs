import { injectGlobal } from '@emotion/css';

// Theme
import { palette } from '../theme';

export const ThemeProvider = {
  oncreate: () => injectGlobal({
    body: {
      backgroundColor: palette[7],
      margin: 0
    }
  }),
  view: () => null
};
