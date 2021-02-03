import { makeStyles } from '../../theme';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    padding: theme.spacing(4, 0),
    [theme.breakpoints.create('minWidth', 'md')]: {
      padding: theme.spacing(8, 4)
    },
    [theme.breakpoints.create('minWidth', 'lg')]: {
      padding: theme.spacing(16, 4)
    },
    [theme.breakpoints.create('minWidth', 'xl')]: {
      padding: theme.spacing(32, 4)
    },
  }
}), 'root');
