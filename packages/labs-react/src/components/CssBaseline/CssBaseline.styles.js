import { makeStyles } from '@material-ui/styles';

export const useGlobalStyles = makeStyles(theme => ({
  '@global': {
    html: {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      boxSizing: 'border-box'
    },
    body: {
      margin: 0,
      color: theme.palette[theme.palette.type].text.primary,
      backgroundColor: theme.palette[theme.palette.type].background,
      ...theme.typography.body1
    },
    '*, *::before, *::after': {
      boxSizing: 'inherit'
    },
    '#root': {
      backgroundImage: `url('assets/tile_${theme.palette.type}.png')`
    }
  }
}));
