import { makeStyles } from '../../theme';

export default makeStyles(theme => ({
  root: {
    border: theme.border(theme.palette[7], 4),
    backgroundColor: theme.palette[1],
    padding: theme.spacing(1.5, 2),
  }
}), 'box');
