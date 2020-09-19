import { makeStyles, darken } from '@material-ui/core';

export const useMenuStyles = makeStyles(theme => ({
  menu: {
    zIndex: theme.zIndex.drawer
  },
  link: {
    ...theme.typography.body1,
    color: 'inherit',
    padding: theme.spacing(1, 2),
    transition: theme.transitions.create(
      ['background-color', 'color'],
      { duration: theme.transitions.duration.shortest }
    ),
    '&:hover': {
      textDecoration: 'none',
      color: theme.palette.text.primary,
      backgroundColor: darken(
        theme.palette.background.paper,
        theme.palette.action.hoverOpacity
      )
    }
  },
  linkActive: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.text.primary
  }
}));
