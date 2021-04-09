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
  }
}), 'navigation');
