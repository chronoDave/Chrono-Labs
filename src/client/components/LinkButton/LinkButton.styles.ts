import { makeStyles } from '../../theme';

export default makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 2),
    transition: theme.transitions.create(['background-color', 'color']),
    border: theme.border(theme.palette[7]),
    color: theme.palette[7],
    '&:hover': {
      backgroundColor: theme.palette[7],
      color: theme.palette[0],
      textDecoration: 'none'
    }
  }
}), 'linkButton');
