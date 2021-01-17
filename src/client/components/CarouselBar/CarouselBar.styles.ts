import { makeStyles } from '../../theme';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
  item: {
    margin: theme.spacing(0, 1),
    backgroundColor: theme.palette.alpha(theme.palette[7], 'disabled'),
    width: theme.spacing(6),
    height: theme.spacing(0.5),
    transition: theme.transitions.create(['background-color'])
  },
  active: {
    backgroundColor: theme.palette[7]
  }
}), 'carouselBar');
