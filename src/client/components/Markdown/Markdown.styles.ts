import { makeStyles } from '../../theme';

export default makeStyles(theme => ({
  p: {
    marginBottom: theme.spacing(2)
  },
  h3: {
    marginBottom: theme.spacing(2)
  },
  h5: {
    marginBottom: theme.spacing(2)
  },
  h6: {
    marginBottom: theme.spacing(2)
  },
  li: {
    marginTop: theme.spacing(2)
  },
  hr: {
    margin: theme.spacing(4, 0)
  },
  img: {
    border: theme.border(theme.palette[7], 4),
    maxWidth: '100%'
  },
  video: {
    border: theme.border(theme.palette[7], 4),
    maxWidth: '100%',
    marginBottom: theme.spacing(2)
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
