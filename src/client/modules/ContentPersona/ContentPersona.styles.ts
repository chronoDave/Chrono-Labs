import { makeStyles } from '../../theme';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(0, 2),
    [theme.breakpoints.create('minWidth', 'sm')]: {
      padding: theme.spacing(0, 4),
    },
    [theme.breakpoints.create('minWidth', 'lg')]: {
      padding: theme.spacing(0, 8),
    },
    [theme.breakpoints.create('minWidth', 'xl')]: {
      padding: theme.spacing(0, 16),
    }
  },
  title: {
    marginBottom: theme.spacing(4),
    [theme.breakpoints.create('minWidth', 'xl')]: {
      marginBottom: theme.spacing(8),
    },
  },
  action: {
    marginTop: theme.spacing(4),
    width: 'fit-content',
    [theme.breakpoints.create('minWidth', 'xl')]: {
      marginTop: theme.spacing(8),
    },
  }
}), 'contentPersona');
