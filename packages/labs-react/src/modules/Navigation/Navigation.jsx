import React from 'react';

// Core
import { Box } from '../../components';

import NavigationItem from './NavigationItem.private';

// Utils
import { PATH } from '../../utils/const';

const Navigation = () => (
  <Box wrap="wrap" justifyContent="center">
    <NavigationItem path={PATH.ABOUT} primary="About" />
    <NavigationItem path={PATH.BB} primary="Bulletin Board" />
    <NavigationItem path={PATH.PIXEL} primary="Pixel Art" />
    <NavigationItem path={PATH.GRAPHICS} primary="Graphics" />
    <NavigationItem path={PATH.CHARTS} primary="Charts" />
    <NavigationItem path={PATH.MUSIC} primary="Music" />
    <NavigationItem path={PATH.ARCHIVES} primary="Archives" />
  </Box>
);

export default Navigation;
