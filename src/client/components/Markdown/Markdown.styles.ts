import { makeStyles } from '../../theme';

export default makeStyles(theme => ({
  li: {
    marginTop: theme.spacing(2)
  },
  hr: {
    margin: theme.spacing(4, 0)
  },
  imgRoot: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  imgCaption: {
    marginTop: theme.spacing()
  },
  img: {
    border: theme.border(theme.palette[7], 4),
    maxWidth: '100%',
  },
  video: {
    border: theme.border(theme.palette[7], 4),
    maxWidth: '100%',
    marginBottom: theme.spacing(0.5)
  }
}), 'markdown');
