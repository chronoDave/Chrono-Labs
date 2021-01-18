import { makeStyles } from '../../theme';

export default makeStyles(theme => ({
  root: {
    fontFamily: '"Open Sans", sans-serif',
    fontWeight: 400,
    margin: 0
  },
  // Variants
  h1: {
    fontSize: theme.pxToRem(96),
    letterSpacing: 4,
    lineHeight: 1,
    fontWeight: 700
  },
  h2: {},
  h3: {},
  h4: {
    fontSize: theme.pxToRem(32),
    letterSpacing: 1,
    fontWeight: 700
  },
  h5: {},
  h6: {
    fontSize: theme.pxToRem(18),
    letterSpacing: 0.5,
    lineHeight: 1.4,
    fontWeight: 600
  },
  body: {
    fontSize: theme.pxToRem(16)
  },
  subtitle: {},
  caption: {},
  // Colors
  inherit: {
    color: 'inherit'
  },
  textPrimary: {
    color: theme.palette[7]
  },
  textSecondary: {
    color: theme.palette[6]
  },
  primary: {
    color: theme.palette[2]
  },
  // Align
  left: {
    textAlign: 'left'
  },
  right: {
    textAlign: 'right'
  },
  center: {
    textAlign: 'center'
  }
}), 'typography');
