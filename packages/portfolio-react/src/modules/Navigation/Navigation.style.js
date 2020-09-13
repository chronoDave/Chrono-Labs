import { makeStyles } from '@material-ui/core/styles';

export const useNavigationStyle = makeStyles(theme => ({
  linkRoot: {
    color: theme.palette.text.primary,
    padding: theme.spacing(1, 2),
    display: 'flex',
    alignItems: 'center'
  },
  linkRootMobile: {
    marginBottom: theme.spacing()
  },
  linkActive: {
    color: theme.palette.background.default,
    backgroundColor: theme.palette.text.primary
  },
  linkHover: {
    transition: theme.transitions.create(
      ['color', 'background-color', 'border-bottom'],
      { duration: theme.transitions.duration.shortest }
    ),
    '&:hover': {
      borderBottom: theme.border(theme.palette.grey[600]),
      backgroundColor: theme.palette.grey[300],
      color: theme.palette.text.primary,
    }
  },
  linkIcon: {
    marginRight: theme.spacing()
  },
  logo: {
    padding: theme.spacing(1, 2),
    color: theme.palette.background.default,
    backgroundColor: theme.palette.text.primary
  },
  logoMobile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    paddingRight: theme.spacing(1.5)
  },
  rootMobile: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 1),
    color: theme.palette.background.default,
    backgroundColor: theme.palette.text.primary,
    height: theme.component.topbar
  },
  drawerPaper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    maxWidth: '90%'
  },
  drawerHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: theme.palette.text.primary,
    height: theme.component.topbar,
    color: theme.palette.background.default,
  }
}));
