import { makeStyles } from '../../theme';

// Assets
import bg5x from '../../assets/bg@5x.png';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    height: `calc(100vh - ${theme.mixins.navigation}px)`,
    background: `url(${bg5x})`,
    backgroundPosition: 'bottom',
    backgroundRepeat: 'repeat-x'
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
    maxWidth: theme.breakpoints.value.xl + theme.breakpoints.value.xs,
    padding: theme.spacing(4, 8),
    [theme.breakpoints.create('minWidth', 'md')]: {
      padding: theme.spacing(2, 4)
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
    flexGrow: 1
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
