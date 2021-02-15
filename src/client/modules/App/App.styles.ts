import { makeStyles } from '../../theme';

export default makeStyles(theme => ({
  root: {
    marginTop: theme.mixins.navigation
  },
  about: {
    padding: theme.spacing(4, 2),
    [theme.breakpoints.create('minWidth', 'md')]: {
      padding: theme.spacing(8, 2)
    }
  }
}), 'app');
