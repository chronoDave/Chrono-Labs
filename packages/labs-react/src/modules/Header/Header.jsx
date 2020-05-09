import React from 'react';

// Core
import {
  Box,
  Typography
} from '../../components';

const Header = () => (
  <Box flexDirection="column">
    <img src="assets/logo@3x.png" alt="ChronoLabs logo" />
    <Box
      justifyContent="center"
      margin={{ top: 1 }}
    >
      <Typography
        variant="caption"
        href="https://twitter.com/ChronoDave"
        color="primary"
      >
        Twitter
      </Typography>
      <Typography
        variant="caption"
        href="https://github.com/chronoDave"
        color="primary"
        margin={[0, 2]}
      >
        GitHub
      </Typography>
      <Typography
        variant="caption"
        href="https://chrono-dave.itch.io/"
        color="primary"
      >
        itch.io
      </Typography>
    </Box>
  </Box>
);

export default Header;
