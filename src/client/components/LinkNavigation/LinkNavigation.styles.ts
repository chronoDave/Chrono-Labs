import { makeStyles } from '../../theme';

export default makeStyles(theme => ({
  root: {
    textDecoration: 'none',
    fontWeight: 500,
    letterSpacing: 1,
    fontSize: theme.pxToRem(12),
    color: theme.palette.alpha(theme.palette[7], 'disabled'),
    transition: theme.transitions.create(['color']),
    '&:hover': {
      textDecoration: 'none',
      color: theme.palette[7]
    }
  },
  active: {
    color: theme.palette[7]
  }
}), 'linkNavigation');
