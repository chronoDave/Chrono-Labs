import { makeStyles, theme } from '../../theme';

// Assets
import bg5x from '../../assets/bg@5x.png';
import bgFlip5x from '../../assets/bgFlip@5x.png';

export default makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  fill: {
    backgroundColor: theme.palette[1]
  },
  fillInverse: {
    backgroundColor: theme.palette[2]
  },
  fade: {
    background: `url(${bg5x}), ${theme.palette[1]}`,
    backgroundRepeat: 'repeat-x',
    backgroundPosition: 'bottom'
  },
  fadeInverse: {
    background: `url(${bgFlip5x}), ${theme.palette[2]}`,
    backgroundRepeat: 'repeat-x',
    backgroundPosition: 'bottom'
  },
  spacer: {
    width: '100%',
    height: 365
  },
  // Background
  xs: {
    maxWidth: theme.breakpoints.value.xs
  },
  sm: {
    maxWidth: theme.breakpoints.value.sm
  },
  md: {
    maxWidth: theme.breakpoints.value.md
  },
  lg: {
    maxWidth: theme.breakpoints.value.lg
  },
  xl: {
    maxWidth: theme.breakpoints.value.xl
  },
  fs: {
    maxWidth: theme.breakpoints.value.fs
  }
}), 'block');
