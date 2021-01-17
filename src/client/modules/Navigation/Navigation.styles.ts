import { makeStyles } from '../../theme';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: theme.palette.black,
    boxShadow: theme.shadows[4],
    padding: theme.spacing(2)
  }
}), 'navigation');
