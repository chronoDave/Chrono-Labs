import { makeStyles, theme } from '../../theme';

export default makeStyles(() => ({
  root: {
    userSelect: 'none',
    width: '1em',
    height: '1em',
    fill: 'currentColor'
  },
  small: {
    fontSize: theme.pxToRem(24)
  },
  large: {
    fontSize: theme.pxToRem(36)
  }
}), 'icon');
