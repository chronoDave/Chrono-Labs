import { makeStyles } from '../../theme';

export default makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 2),
    width: 'fit-content',
    transition: theme.transitions.create(['background-color', 'color']),
  },
  white: {
    border: theme.border(theme.palette[7]),
    color: theme.palette[7],
    '&:hover': {
      backgroundColor: theme.palette[7],
      color: theme.palette[0]
    }
  },
  black: {
    border: theme.border(theme.palette[0]),
    color: theme.palette[0],
    '&:hover': {
      backgroundColor: theme.palette[0],
      color: theme.palette[7]
    }
  }
}), 'button');
