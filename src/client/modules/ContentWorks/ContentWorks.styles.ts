import { makeStyles } from '../../theme';

export default makeStyles(theme => ({
  title: {
    marginBottom: theme.spacing(4),
    [theme.breakpoints.create('minWidth', 'xl')]: {
      marginBottom: theme.spacing(8),
    },
  },
  body: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
}), 'contentWorks');
