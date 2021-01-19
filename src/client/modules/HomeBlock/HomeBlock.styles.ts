import { makeStyles } from '../../theme';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    padding: theme.spacing(24, 32)
  },
  persona: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'space-between'
  },
  personaText: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(),
    width: theme.mixins.persona
  },
  personaSecondary: {
    marginTop: theme.spacing(0.5)
  },
  personaImage: {
    padding: theme.spacing(),
    border: theme.border(theme.palette[7], theme.unit(0.5))
  },
  body: {
    marginLeft: theme.spacing(24),
    padding: theme.spacing(0, 2),
    width: theme.breakpoints.value.md,
  },
  title: {
    marginBottom: theme.spacing(4)
  },
}), 'homeBlock');
