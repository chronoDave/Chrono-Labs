import { makeStyles } from '@material-ui/styles';

export const useTypographyStyles = makeStyles(theme => ({
  root: {
    margin: 0
  },
  ...theme.typography,
  primary: {
    color: theme.palette[theme.palette.type].text.primary
  },
  secondary: {
    color: theme.palette[theme.palette.type].text.secondary
  },
  disabled: {
    color: theme.palette[theme.palette.type].text.disabled
  },
  padding: ({ padding }) => ({
    padding: theme.utils.formatShorthandSpacing(padding)
  }),
  margin: ({ margin }) => ({
    margin: theme.utils.formatShorthandSpacing(margin)
  }),
  link: {
    '&:hover': {
      color: theme.palette[theme.palette.type].primary.main
    }
  }
}));
