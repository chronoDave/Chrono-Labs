import { css } from '@emotion/css';

// Theme
import theme, { Theme } from './theme';

// Utils
import { capitalize } from '../utils';

type Style = { [key: string]: number | string | Style };
type Styles = (theme: Theme) => { [key: string]: Style };
type Classes = { [key: string]: string };

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
