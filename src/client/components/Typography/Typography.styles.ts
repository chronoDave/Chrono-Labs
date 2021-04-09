import { makeStyles } from '../../theme';

export default makeStyles(theme => ({
  root: {
    fontFamily: '"Open Sans", sans-serif',
    fontWeight: 400,
    margin: 0,
    color: 'inherit'
  },
  gutter: {
    marginBottom: theme.spacing(2)
  },
  // Variants
  h1: {
    fontSize: theme.pxToRem(96),
    letterSpacing: 4,
    lineHeight: 1,
    fontWeight: 700
  },
  h2: {
    fontSize: theme.pxToRem(72),
    letterSpacing: 3,
    lineHeight: 1,
    fontWeight: 600
  },
  h3: {
    fontSize: theme.pxToRem(48),
    letterSpacing: 1,
    fontWeight: 700
  },
  h4: {
    fontSize: theme.pxToRem(32),
    letterSpacing: 1,
    fontWeight: 700
  },
  h5: {
    fontSize: theme.pxToRem(24),
    letterSpacing: 0.5,
    lineHeight: 1.4,
    fontWeight: 600
  },
  h6: {
    fontSize: theme.pxToRem(18),
    letterSpacing: 0.5,
    lineHeight: 1.4,
    fontWeight: 600
  },
  body: {
    fontSize: theme.pxToRem(16),
    lineHeight: 1.6
  },
  subtitle: {
    fontSize: theme.pxToRem(14)
  },
  caption: {
    fontSize: theme.pxToRem(12)
  },
  // Colors
  textPrimary: {
    color: theme.palette[7]
  },
  textSecondary: {
    color: theme.palette[6]
  },
  primary: {
    color: theme.palette[2]
  }
}), 'typography');
