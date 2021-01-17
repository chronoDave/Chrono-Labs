import { css } from '@emotion/css';

// Theme
import theme from './theme';

// Utils
import { capitalize } from '../utils';

type Theme = typeof theme;

type Styles = (theme: Theme) => {
  [key: string]: {
    [key: string]: number | string | { [key: string]: string }
  }
};

type Classes = {
  [key: string]: string
};

export default (styles: Styles, label: string): Classes => Object
  .entries(styles(theme))
  .reduce((acc, [key, value]) => ({
    ...acc,
    [key]: css({
      ...value,
      label: label ?
        `${label}${capitalize(key)}` :
        key
    })
  }), {});
