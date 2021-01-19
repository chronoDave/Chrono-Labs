import { makeStyles } from '../../theme';

// Assets
import bg5x from '../../assets/bg@5x.png';
import bgFlip5x from '../../assets/bgFlip@5x.png';

export default makeStyles(() => ({
  root: {
    height: 365,
    width: '100%',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'repeat-x',
    background: `url(${bg5x})`,
  },
  flip: {
    background: `url(${bgFlip5x})`,
  }
}), 'backgroundDither');
