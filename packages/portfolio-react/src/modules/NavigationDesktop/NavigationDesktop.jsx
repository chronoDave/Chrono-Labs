import React from 'react';

// Core
import { Box, Typography } from '@material-ui/core';

import { LinkText } from '../../components';

// Utils
import { PATHS } from '../../utils/const';

import NavigationDesktopItem from './NavigationDesktopItem.private';

// Styles
import { useNavigationDesktopStyles } from './NavigationDesktop.style';

const NavigationDesktop = () => {
  const classes = useNavigationDesktopStyles();

  return (
    <div className={classes.root}>
      <Box display="flex" alignItems="flex-start">
        <NavigationDesktopItem href={PATHS.HOME} />
        <NavigationDesktopItem href={PATHS.DOOMBOX} />
        <NavigationDesktopItem href={PATHS.THESIS} />
        <NavigationDesktopItem href={PATHS.KIZUNA_AI} />
        <NavigationDesktopItem href={PATHS.ABOUT} />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-end"
      >
        <Typography
          component="a"
          href={PATHS.EXTERNAL.TWITTER}
          classes={{ root: classes.logo }}
        >
          @ChronoDave
        </Typography>
        <LinkText href={PATHS.EXTERNAL.GITHUB.REPO}>
          Source (GitHub)
        </LinkText>
      </Box>
    </div>
  );
};

export default NavigationDesktop;
