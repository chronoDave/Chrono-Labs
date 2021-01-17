import { makeStyles } from '../../theme';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: theme.mixins.navigation,
    backgroundColor: theme.palette[0],
    boxShadow: theme.shadows[4],
    padding: theme.spacing(0, 4)
  }
}), 'navigation');
