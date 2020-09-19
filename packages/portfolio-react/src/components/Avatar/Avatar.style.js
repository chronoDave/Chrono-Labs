import { makeStyles } from '@material-ui/core';

export const useAvatarStyles = makeStyles(theme => ({
  xs: {
    width: theme.spacing(4),
    height: theme.spacing(4)
  },
  sm: {
    width: theme.spacing(8),
    height: theme.spacing(8)
  },
  md: {
    width: theme.spacing(16),
    height: theme.spacing(16)
  },
  lg: {
    width: theme.spacing(32),
    height: theme.spacing(32)
  },
  xl: {
    width: theme.spacing(64),
    height: theme.spacing(64)
  }
}));
