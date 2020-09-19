import { makeStyles, fade } from '@material-ui/core';

// Assets
import bg from '../../../assets/bg.jpg';

export const useNavigationDesktopStyles = makeStyles(theme => ({
  root: {
    position: 'sticky',
    top: 0,
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    padding: theme.spacing(2),
    '@media (max-width: 1680px)': {
      zIndex: theme.zIndex.appBar,
      background: `radial-gradient(transparent 90%, black 500%), url(${bg})`
    }
  },
  item: {
    ...theme.typography.body1,
    color: 'inherit',
    textDecoration: 'none',
    padding: theme.spacing(0.5, 1),
    margin: theme.spacing(0, 1),
    transition: theme.transitions.create(
      ['background-color'],
      { duration: theme.transitions.duration.shortest }
    ),
    '&:hover': {
      borderBottom: theme.border(theme.palette.text.primary, 2),
      backgroundColor: fade(
        theme.palette.common.black,
        theme.palette.action.hoverOpacity
      ),
    }
  },
  itemActive: {
    fontWeight: 'bolder',
    borderBottom: theme.border(theme.palette.text.primary, 2)
  },
  logo: {
    backgroundColor: theme.palette.text.primary,
    color: theme.palette.common.white,
    marginBottom: theme.spacing(),
    padding: theme.spacing(1, 2),
    textDecoration: 'none',
    borderBottom: theme.border(theme.palette.text.primary, 2),
    letterSpacing: 2,
    transition: theme.transitions.create(
      ['background-color', 'color'],
      { duration: theme.transitions.duration.shortest }
    ),
    '&:hover': {
      backgroundColor: fade(
        theme.palette.common.black,
        theme.palette.action.hoverOpacity
      ),
      color: theme.palette.text.primary,
    }
  }
}));
