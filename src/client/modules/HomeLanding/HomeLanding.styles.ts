import { makeStyles } from '../../theme';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    minHeight: `calc(100vh - ${theme.mixins.navigation + theme.unit(4)}px)`,
    marginTop: theme.mixins.navigation,
    padding: theme.spacing(2, 0),
    [theme.breakpoints.create('minWidth', 'xl')]: {
      padding: theme.spacing(2, 4),
      flexDirection: 'row',
      flexWrap: 'wrap'
    }
  },
  titleRoot: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(4, 0),
    [theme.breakpoints.create('minWidth', 'xl')]: {
      padding: theme.spacing(0, 4)
    }
  },
  titleLinks: {
    display: 'flex',
    marginTop: theme.spacing(2)
  },
  titleLink: {
    margin: theme.spacing(0, 1)
  },
  carouselRoot: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  carouselBody: {
    border: theme.border(theme.palette[7], 4),
    marginBottom: theme.spacing(1.5)
  }
}), 'homeLanding');