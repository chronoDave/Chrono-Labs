import { makeStyles } from '../../theme';

export default makeStyles(theme => ({
  root: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    color: theme.palette[7]
  }
}), 'buttonIcon');
