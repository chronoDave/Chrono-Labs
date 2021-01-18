import { makeStyles } from '../../theme';

// Assets
import bg from '../../assets/bg@5x.png';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    height: `calc(100vh - ${theme.mixins.navigation}px)`,
    background: `url(${bg})`,
    backgroundPosition: 'bottom',
    backgroundRepeat: 'repeat-x'
  },
  body: {
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
  containerCarousel: {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1
  },
  titleButtons: {
    display: 'flex',
    marginTop: theme.spacing(2)
  },
  button: {
    marginRight: theme.spacing(2)
  }
}), 'home');
