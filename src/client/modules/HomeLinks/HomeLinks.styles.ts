import { makeStyles } from '../../theme';

export default makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette[2]
  },
  body: {
    display: 'flex'
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(2)
  },
  category: {
    marginRight: theme.spacing(4)
  },
  button: {
    color: theme.palette[7],
    display: 'flex',
    alignItems: 'center',
    border: theme.border(theme.palette[7]),
    padding: theme.spacing(1, 2),
    paddingRight: theme.spacing(3),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(),
    transition: theme.transitions.create(['color', 'background-color']),
    '&:hover': {
      backgroundColor: theme.palette[7],
      color: theme.palette[0]
    }
  },
  text: {
    display: 'flex',
    flexDirection: 'column'
  },
  icon: {
    marginRight: theme.spacing(2)
  }
}), 'homeLinks');
