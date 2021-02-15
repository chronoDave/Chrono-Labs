import { makeStyles } from '../../theme';

export default makeStyles(theme => ({
  p: {
    marginBottom: theme.spacing(2)
  },
  h3: {
    marginBottom: theme.spacing(2)
  },
  li: {
    marginTop: theme.spacing(2)
  },
  hr: {
    margin: theme.spacing(4, 0)
  },
  img: {
    padding: theme.spacing(),
    margin: theme.spacing(),
    border: theme.border(theme.palette[7], 4)
  },
  persona: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.create('minWidth', 'md')]: {
      flexDirection: 'row',
    }
  },
  personaBody: {
    marginLeft: theme.spacing(2),
    [theme.breakpoints.create('minWidth', 'md')]: {
      marginLeft: theme.spacing(4)
    }
  }
}), 'markdown');
