import { makeStyles } from '@material-ui/styles';

export const useButtonStyles = makeStyles(theme => ({
  root: {
    display: 'inline-flex',
    backgroundColor: 'transparent',
    cursor: 'pointer',
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
  },
  margin: {
    margin: ({ margin }) => theme.utils.formatShorthandSpacing(margin)
  },
  ornateRoot: {
    padding: 1,
    borderRadius: 0,
    border: theme.border('transparent'),
    transition: theme.transition.create(['border-color'], {
      duration: theme.transition.duration.shorter
    }),
    '&:hover, &:focus': {
      borderColor: theme.palette[theme.palette.type].text.primary
    }
  },
  ornateRootActive: {
    border: theme.border(theme.palette[theme.palette.type].text.primary)
  },
  ornateChild: {
    padding: ({ variant }) => theme.spacing([
      0.25,
      variant === 'caption' ? 1.25 : 3
    ]),
    transition: theme.transition.create(['background-color', 'color'], {
      duration: theme.transition.duration.shortest,
      easing: theme.transition.easeOut
    }),
    textDecoration: 'underline',
    '&:active': {
      backgroundColor: theme.palette[theme.palette.type].text.primary,
      color: theme.palette[theme.palette.type].background,
    }
  },
  ornateChildActive: {
    backgroundColor: theme.palette[theme.palette.type].text.primary,
    color: theme.palette[theme.palette.type].background,
    '&:hover, &:focus': {
      backgroundColor: 'initial',
      color: 'initial'
    }
  }
}));
