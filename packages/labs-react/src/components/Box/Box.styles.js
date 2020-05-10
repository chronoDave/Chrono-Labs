import { makeStyles } from '@material-ui/styles';

export const useBoxStyles = makeStyles(theme => ({
  root: {
    display: ({ display }) => display
  },
  flex: ({ flex }) => flex,
  size: ({ size }) => Object.entries(size)
    .map(([key, value]) => ({ [key]: theme.utils.formatSize(value) }))
    .reduce((acc, cur) => ({ ...acc, ...cur }), {}),
  spacing: ({ spacing: { margin, padding } }) => ({
    padding: theme.utils.formatShorthandSpacing(padding),
    margin: theme.utils.formatShorthandSpacing(margin)
  })
}));
