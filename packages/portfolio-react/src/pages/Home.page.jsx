import React from 'react';

// Core
import { Box, Typography, useMediaQuery } from '@material-ui/core';

import { LinkText, LinkIcon, Icon } from '../components';

// Utils
import { PATHS, PATH_NAMES } from '../utils/const';

const HomePage = () => {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));

  return (
    <Box
      position="absolute"
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box
        flexGrow={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={4}
          bgcolor="text.primary"
          color="background.default"
          borderRadius={4}
        >
          <Typography variant={isMobile ? 'h4' : 'h1'}>
            ChronoDave
          </Typography>
          <Typography>
            David Wolters // Multimedia designer
          </Typography>
          <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} mt={{ xs: 2, md: 4 }}>
            <Box mx={2} my={{ xs: 0.5, md: 0 }}>
              <LinkText href={PATHS.TECH_LAB} disableTooltip>
                {PATH_NAMES[PATHS.TECH_LAB]}
              </LinkText>
            </Box>
            <Box mx={2} my={{ xs: 0.5, md: 0 }}>
              <LinkText href={PATHS.THESIS} disableTooltip>
                {PATH_NAMES[PATHS.THESIS]}
              </LinkText>
            </Box>
            <Box mx={2} my={{ xs: 0.5, md: 0 }}>
              <LinkText href={PATHS.DOOMBOX} disableTooltip>
                {PATH_NAMES[PATHS.DOOMBOX]}
              </LinkText>
            </Box>
            <Box mx={2} my={{ xs: 0.5, md: 0 }}>
              <LinkText href={PATHS.ABOUT} disableTooltip>
                {PATH_NAMES[PATHS.ABOUT]}
              </LinkText>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" p={1}>
        <Box display="flex" justifyContent="center" alignItems="center">
          <LinkIcon href={PATHS.EXTERNAL.GITHUB.REPO}>
            <Icon type="github" />
          </LinkIcon>
          <LinkIcon href={PATHS.EXTERNAL.TWITTER}>
            <Icon type="twitter" />
          </LinkIcon>
        </Box>
        <Typography variant="caption">
          <i>
            Last updated 4 October, 2020
          </i>
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePage;
