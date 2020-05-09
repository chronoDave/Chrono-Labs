import { makeStyles } from '@material-ui/styles';

export const useButtonStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'transparent',
    border: 0,
    borderRadius: theme.shape.borderRadius,
    outline: theme.accessibility.outline ? 'initial' : 0,
    color: 'inherit',
    ...theme.typography.body1,
    transition: theme.transition.create(['background-color', 'box-shadow'], {
      duration: theme.transition.duration.shorter
    }),
    '&:hover, &:focus': {
      backgroundColor: theme.palette[theme.palette.type].action.hover
    },
    '&:active': {
      backgroundColor: theme.palette[theme.palette.type].action.active
    }
  },
  disabled: {
    color: theme.palette[theme.palette.type].text.disabled
  }
}));
