import { makeStyles } from '../../theme';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  image: {
    padding: theme.spacing(),
    width: theme.mixins.persona,
    height: theme.mixins.persona,
    border: theme.border(theme.palette[7], theme.unit(0.5))
  },
  body: {
    width: theme.mixins.persona,
    height: theme.mixins.persona,
    padding: theme.spacing(1, 1.5)
  },
  description: {
    paddingTop: theme.spacing(0.5)
  }
}), 'persona');
