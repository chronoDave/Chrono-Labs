import { makeStyles } from '../../theme';

export default makeStyles(theme => ({
  root: {
    border: theme.border(theme.palette[0]),
    color: theme.palette[0],
    padding: theme.spacing(1, 2),
    width: 'fit-content',
    transition: theme.transitions.create(['background-color', 'color']),
    '&:hover': {
      backgroundColor: theme.palette[0],
      color: theme.palette[7]
    }
  },
  large: {
    padding: theme.spacing(1.5, 3)
  }
}), 'button');
