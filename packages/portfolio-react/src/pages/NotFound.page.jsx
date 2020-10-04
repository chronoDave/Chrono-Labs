import React from 'react';

// Core
import { Box, Typography } from '@material-ui/core';

import { LinkText } from '../components';

// Utils
import { PATHS, PATH_NAMES } from '../utils/const';

const NotFoundPage = () => (
  <Box mx="auto" mt={8}>
    <Typography textAlign="center">
      Seems the page you&apos;re looking for doesn&apos;t exist.
    </Typography>
    <Box display="flex" justifyContent="center" mt={2}>
      <LinkText href={PATHS.HOME}>
        {PATH_NAMES[PATHS.HOME]}
      </LinkText>
    </Box>
  </Box>
);

export default NotFoundPage;
