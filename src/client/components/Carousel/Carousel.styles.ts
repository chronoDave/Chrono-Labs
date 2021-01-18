import { makeStyles } from '../../theme';

export default makeStyles(theme => ({
  root: {
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  },
  image: {
    position: 'absolute',
    height: '100%',
    transition: theme.transitions.create(['left'], {
      duration: 'complex'
    })
  },
  bars: {
    width: '100%',
    position: 'absolute',
    bottom: theme.spacing(0.5)
  },
  icon: {
    color: theme.palette.alpha(theme.palette[7], 0),
    transition: theme.transitions.create(['color']),
    '&:hover': {
      color: theme.palette[7]
    }
  },
  next: {
    position: 'absolute',
    right: 0
  },
  previous: {
    position: 'absolute',
    left: 0
  }
}), 'carousel');
