import { makeStyles } from '../../theme';

export default makeStyles(theme => ({
  root: {
    position: 'fixed',
    width: `calc(100% - ${theme.spacing(4)})`,
    height: theme.mixins.navigation,
    top: 0,
    padding: theme.spacing(0, 2),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.palette[0],
    boxShadow: theme.shadows[4],
    zIndex: 100,
    [theme.breakpoints.create('minWidth', 'xs')]: {
      width: `calc(100% - ${theme.spacing(8)})`,
      padding: theme.spacing(0, 4),
      justifyContent: 'flex-end'
    }
  },
  itemRoot: {
    textDecoration: 'none',
    fontWeight: 500,
    letterSpacing: 1,
    fontSize: theme.pxToRem(12),
    color: theme.palette.alpha(theme.palette[7], 'disabled'),
    transition: theme.transitions.create(['color']),
    '&:hover': {
      textDecoration: 'none',
      color: theme.palette[7]
    },
    [theme.breakpoints.create('minWidth', 'xs')]: {
      paddingLeft: theme.spacing(4)
    }
  },
  itemActive: {
    color: theme.palette[7]
  }
}), 'navigation');
