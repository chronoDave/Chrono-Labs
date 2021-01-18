import { makeStyles } from '../../theme';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: theme.mixins.carousel.xs,
    [theme.breakpoints.create('minWidth', 'md')]: {
      width: theme.mixins.carousel.md,
    }
  },
  carousel: {
    border: theme.border(theme.palette[7], 4),
    margin: theme.spacing(1.5, 0)
  },
  description: {
    height: 100,
    border: theme.border(theme.palette[7], 4),
    backgroundColor: theme.palette[1],
    padding: theme.spacing(1.5, 2),
    width: `calc(${theme.mixins.carousel.xs - theme.unit(4)}px)`,
    [theme.breakpoints.create('minWidth', 'md')]: {
      width: `calc(${theme.mixins.carousel.md - theme.unit(4)}px)`
    }
  },
  title: {
    width: 'fit-content',
    '&:hover': {
      textDecoration: 'underline',
      color: theme.palette[7]
    }
  }
}), 'carouselHome');
