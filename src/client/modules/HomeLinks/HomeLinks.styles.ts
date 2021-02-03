import { makeStyles } from '../../theme';

export default makeStyles(theme => ({
  body: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(0, 2),
    [theme.breakpoints.create('minWidth', 'sm')]: {
      padding: theme.spacing(0, 4),
    },
    [theme.breakpoints.create('minWidth', 'lg')]: {
      padding: theme.spacing(0, 8),
    },
    [theme.breakpoints.create('minWidth', 'xl')]: {
      padding: theme.spacing(0, 16),
    }
  },
  title: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.create('minWidth', 'lg')]: {
      marginBottom: theme.spacing(4),
    },
  },
  links: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  category: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(2)
  },
  categoryItems: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing()
  },
  categoryItem: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette[7],
    margin: theme.spacing(),
    minWidth: theme.spacing(20)
  },
  categoryIcon: {
    marginRight: theme.spacing()
  }
}), 'homeLinks');
