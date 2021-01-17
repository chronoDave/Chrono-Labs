import { makeStyles } from '../../theme';

export default makeStyles(theme => ({
  // Variants
  h1: {},
  h2: {},
  h3: {},
  h4: {},
  h5: {},
  h6: {},
  body: {
    fontSize: theme.pxToRem(14)
  },
  subtitle: {},
  caption: {},
  // Colors
  inherit: {
    color: 'inherit'
  },
  textPrimary: {
    color: theme.palette.white
  },
  textSecondary: {
    color: theme.palette.grey
  },
  primary: {
    color: theme.palette.primary
  },
  root: {
    fontFamily: 'NotoSansJP, sans-serif',
    fontWeight: 400,
    margin: 0
  }
}), 'typography');
