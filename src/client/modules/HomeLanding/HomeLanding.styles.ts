import { makeStyles } from '../../theme';

// Assets
import bg5x from '../../assets/bg@5x.png';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    minHeight: `calc(100vh - ${theme.mixins.navigation + theme.unit(4)}px)`,
    background: `url(${bg5x})`,
    backgroundPosition: 'bottom',
    backgroundRepeat: 'repeat-x',
    padding: theme.spacing(2)
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  title: {
    padding: theme.spacing(2),
    [theme.breakpoints.create('minWidth', 'md')]: {
      padding: theme.spacing(8)
    },
    [theme.breakpoints.create('minWidth', 'xl')]: {
      padding: theme.spacing(12)
    }
  },
  buttons: {
    display: 'flex',
    marginTop: theme.spacing(2)
  },
  button: {
    marginRight: theme.spacing(2)
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.create('minWidth', 'lg')]: {
      flexGrow: 1
    }
  },
  carousel: {
    border: theme.border(theme.palette[7], 4),
    margin: theme.spacing(1.5, 0)
  },
  link: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
}), 'homeLanding');
