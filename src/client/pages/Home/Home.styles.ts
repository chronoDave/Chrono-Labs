import { makeStyles } from '../../theme';

// Assets
import bg from '../../assets/bg@5x.png';

export default makeStyles(theme => ({
  root: {
    height: `calc(100vh - ${theme.mixins.navigation}px)`,
    background: `url(${bg})`,
    backgroundPosition: 'bottom',
    backgroundRepeat: 'repeat-x'
  },
  body: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: 1540,
    justifyContent: 'space-between'
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: theme.palette[7],
    padding: theme.spacing(4)
  },
  containerRoot: {
    flexGrow: 1
  },
  containerBody: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carousel: {
    border: theme.border(theme.palette[7], 4),
    marginTop: theme.spacing(2)
  },
  carouselBar: {
    margin: theme.spacing(2, 0)
  },
  description: {
    height: 105
  }
}), 'home');
