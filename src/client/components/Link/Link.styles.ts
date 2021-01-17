import { makeStyles } from '../../theme';

export default makeStyles(theme => ({
  root: {
    textDecoration: 'none',
    fontWeight: 500,
    letterSpacing: 1,
    marginLeft: theme.spacing(2),
    fontSize: theme.pxToRem(12),
    color: theme.palette.alpha(
      theme.palette.white,
      'disabled'
    ),
    transition: theme.transitions.create(['color']),
    '&:hover': {
      color: theme.palette.white
    }
  },
  active: {
    color: theme.palette.white
  }
}), 'link');
