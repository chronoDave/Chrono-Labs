import { makeStyles } from '../../theme';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
  body: {
    width: '100%'
  },
  xs: {
    maxWidth: theme.breakpoints.value.xs
  },
  sm: {
    maxWidth: theme.breakpoints.value.sm
  },
  md: {
    maxWidth: theme.breakpoints.value.md
  },
  lg: {
    maxWidth: theme.breakpoints.value.lg
  },
  xl: {
    maxWidth: theme.breakpoints.value.xl
  }
}), 'container');
