import React from 'react';

// Core
import {
  Typography,
  Box,
  Button
} from '../../components';

// Hooks
import { useTheme } from '../../hooks';

const Footer = () => {
  const { mode, toggleMode } = useTheme();

  const inverseType = mode === 'light' ?
    'dark' :
    'light';

  return (
    <Box flexDirection="column" alignItems="center">
      <Box
        justifyContent="center"
        margin={{ bottom: 1 }}
      >
        <Typography
          variant="caption"
          href="https://twitter.com/ChronoDave"
          color="primary"
          margin={{ right: 2 }}
        >
          Twitter
        </Typography>
        <Typography
          variant="caption"
          href="https://github.com/chronoDave"
          color="primary"
          margin={{ right: 2 }}
        >
          GitHub
        </Typography>
        <Typography
          variant="caption"
          href="https://chrono-dave.itch.io/"
          color="primary"
          margin={{ right: 2 }}
        >
          itch.io
        </Typography>
        <Typography
          variant="caption"
          href="https://chronodave.bandcamp.com/releases"
          color="primary"
          margin={{ right: 2 }}
        >
          Bandcamp
        </Typography>
        <Typography
          variant="caption"
          href="https://ko-fi.com/chronocide"
          color="primary"
        >
          Kofi
        </Typography>
      </Box>
      <Box alignItems="center">
        <Typography
          variant="caption"
          href="https://github.com/chronoDave/Chrono-Labs"
          color="primary"
          margin={{ right: 0.5 }}
        >
          Source (GitHub)
        </Typography>
        <Button
          variant="ornate"
          margin={{ left: 0.5 }}
          TypographyProps={{ variant: 'caption' }}
          onChange={toggleMode}
        >
          {`Toggle theme (${inverseType})`}
        </Button>
      </Box>
    </Box>

  );
};

export default Footer;
