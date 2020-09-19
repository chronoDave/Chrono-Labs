import { makeStyles } from '@material-ui/core';

// Assets
import bg from '../../../assets/bg.jpg';

export const useAppStyles = makeStyles(() => ({
  background: {
    top: 0,
    zIndex: -1,
    position: 'fixed',
    width: '100%',
    height: '100%',
    background: `radial-gradient(transparent 90%, black 500%), url(${bg})`
  }
}));
