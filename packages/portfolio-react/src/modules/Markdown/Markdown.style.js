import { makeStyles } from '@material-ui/core';

export const useMarkdownStyles = makeStyles(theme => ({
  text: {
    padding: theme.spacing(0, 2)
  },
  link: {
    ...theme.typography.body1,
    whiteSpace: 'nowrap',
    color: 'inherit',
    '&:hover': {
      textDecoration: 'none'
    }
  },
  tooltip: {
    margin: '0 4px'
  },
  listItem: {
    ...theme.typography.body1,
    margin: theme.spacing(1, 0)
  },
  image: {
    width: '100%',
    objectPosition: 'center'
  }
}));
