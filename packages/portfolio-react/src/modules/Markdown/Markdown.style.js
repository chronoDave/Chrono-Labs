import { makeStyles } from '@material-ui/core/styles';

export const useMarkdownStyle = makeStyles(theme => ({
  text: {
    padding: theme.spacing(0, 2)
  },
  listItem: {
    margin: theme.spacing(1, 0)
  },
  header: {
    color: theme.palette.background.default,
    backgroundColor: theme.palette.text.primary,
    padding: theme.spacing(1, 2)
  },
  image: {
    width: '100%',
    objectFit: 'cover'
  }
}));
