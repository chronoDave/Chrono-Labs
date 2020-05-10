import { makeStyles } from '@material-ui/styles';

export const useAppStyles = makeStyles(theme => ({
  background: {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    background: [
      'radial-gradient(transparent, rgba(0, 0, 0, 0.06))',
      `url('assets/tile_${theme.palette.type}.png')`
    ].join(', ')
  },
  root: {
    position: 'fixed',
    minHeight: '100vh',
    minWidth: '100vw',
    height: '100%',
    width: '100%',
    overflow: 'auto'
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  content: {
    height: '100vh'
  },
  sidebar: {
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    height: '100vh',
    zIndex: 10
  }
  // root: {
  //   position: 'fixed',
  //   minHeight: '100vh',
  //   height: '100%',
  //   width: '100vw',
  //   overflow: 'auto',
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   padding: theme.spacing([1, 0])
  // },
  // background: {

  // },
  // body: {
  //   flexGrow: 1,
  //   width: '100%',
  //   padding: theme.spacing(2),
  //   display: 'flex',
  //   alignItems: 'center',
  //   height: '200vh'
  // },
  // content: {
  //   flexGrow: 1,
  //   height: '200vh'
  // }
  // sidebar: {
  //   display: 'flex',
  //   height: '100vh',
  //   alignItems: 'center',
  //   position: 'fixed',
  //   width: theme.size.sidebar
  // },
  // body: {
  //   position: 'fixed',
  //   left: theme.size.sidebar,
  //   width: `calc(100vw - ${theme.size.sidebar}px)`,
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   overflow: 'auto'
  // },
}));
