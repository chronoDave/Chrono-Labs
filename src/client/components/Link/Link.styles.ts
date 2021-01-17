import { makeStyles } from '../../theme';

export default makeStyles(theme => ({
  root: {
    textDecoration: 'none',
    fontWeight: 500,
    letterSpacing: 1,
    marginLeft: theme.spacing(4),
    fontSize: theme.pxToRem(12),
    color: theme.palette.alpha(
      theme.palette[7],
      'disabled'
    ),
    transition: theme.transitions.create(['color']),
    '&:hover': {
      color: theme.palette[7]
    }
  },
  active: {
    color: theme.palette[7]
  }
}), 'link');
