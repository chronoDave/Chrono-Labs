import React from 'react';

// Core
import { Header } from '../modules';

import { Typography, Box } from '../components';

const HomePage = () => (
  <Box
    flexDirection="column"
    alignItems="center"
    padding={4}
    minHeight="100vh"
  >
    <Header />
    <Box
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      flexGrow={1}
      flexShrink={0}
    >
      E
    </Box>
    <Typography variant="caption" href="https://github.com/chronoDave/Chrono-Labs" color="primary">
      Source (GitHub)
    </Typography>
  </Box>
);

export default HomePage;
