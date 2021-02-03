import { makeStyles } from '../../theme';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    marginBottom: theme.spacing(4),
    [theme.breakpoints.create('minWidth', 'xl')]: {
      marginBottom: theme.spacing(8),
    },
  },
  body: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(2),
    width: theme.mixins.carousel['1x'],
    [theme.breakpoints.create('minWidth', 'md')]: {
      width: theme.mixins.carousel['2x'],
      margin: theme.spacing(4)
    },
    [theme.breakpoints.create('minWidth', 'lg')]: {
      margin: theme.spacing(8)
    }
  },
  itemTitle: {
    marginBottom: theme.spacing(),
    [theme.breakpoints.create('minWidth', 'md')]: {
      marginBottom: theme.spacing(2)
    }
  },
  itemImage: {
    border: theme.border(theme.palette[7], 4),
    height: theme.mixins.carousel['1x'],
    [theme.breakpoints.create('minWidth', 'md')]: {
      height: theme.mixins.carousel['2x']
    }
  },
  itemDescription: {
    padding: theme.spacing(1, 0.5),
    [theme.breakpoints.create('minWidth', 'md')]: {
      padding: theme.spacing(2, 1)
    }
  },
  itemButton: {
    alignSelf: 'flex-end',
    marginTop: theme.spacing()
  }
}), 'homeWorks');
