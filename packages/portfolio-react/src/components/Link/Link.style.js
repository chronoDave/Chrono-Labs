import { makeStyles, fade } from '@material-ui/core';

export const useLinkStyles = makeStyles(theme => ({
  textRoot: {
    color: 'inherit',
    whiteSpace: 'nowrap',
    '&:hover': {
      textDecoration: 'none'
    }
  },
  textTooltip: {
    margin: '0 4px'
  },
  iconRoot: {
    display: 'inline-flex',
    flex: '0 0 auto',
    color: 'inherit',
    padding: theme.spacing(1.5),
    fontSize: '1.5rem',
    textAlign: 'center',
    borderRadius: '50%',
    transition: theme.transitions.create('background-color', {
      duration: theme.transitions.duration.shortest,
    }),
    '&:hover': {
      backgroundColor: fade(theme.palette.action.active, theme.palette.action.hoverOpacity),
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    }
  }
}));
