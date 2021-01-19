import { makeStyles } from '../../theme';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(8, 32)
  },
  title: {
    marginBottom: theme.spacing(4)
  },
  body: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  work: {
    display: 'flex',
    flexDirection: 'column',
    width: theme.mixins.carousel.xs,
    margin: theme.spacing(4, 2),
    [theme.breakpoints.create('minWidth', 'md')]: {
      width: theme.mixins.carousel.md
    }
  },
  image: {
    width: theme.mixins.carousel.xs,
    height: theme.mixins.carousel.xs,
    border: theme.border(theme.palette[7], theme.unit(0.5)),
    [theme.breakpoints.create('minWidth', 'md')]: {
      width: theme.mixins.carousel.md,
      height: theme.mixins.carousel.md,
    }
  },
  workTitle: {
    marginBottom: theme.spacing(2)
  },
  description: {
    padding: theme.spacing(2)
  },
  linkContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%'
  },
  link: {
    fontSize: theme.pxToRem(18),
    letterSpacing: 0.5,
    lineHeight: 1.4,
    fontWeight: 600,
    marginRight: theme.spacing()
  }
}), 'homeWorks');
