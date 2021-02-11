import { makeStyles } from '../../theme';

export default makeStyles(() => ({
  root: {
    textDecoration: 'none',
    cursor: 'pointer',
    display: 'inline-flex',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  underline: {
    textDecoration: 'underline'
  }
}), 'link');
