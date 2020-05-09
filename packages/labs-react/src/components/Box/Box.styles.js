import { makeStyles } from '@material-ui/styles';

export const useBoxStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  flex: ({ flex }) => flex,
  size: ({ size: { minHeight } }) => ({
    minHeight: theme.utils.formatSize(minHeight)
  }),
  spacing: ({ spacing: { margin, padding } }) => ({
    padding: theme.utils.formatShorthandSpacing(padding),
    margin: theme.utils.formatShorthandSpacing(margin)
  })
}));
