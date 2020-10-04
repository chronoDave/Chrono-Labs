import React from 'react';

// Core
import { Box } from '@material-ui/core';

import { LinkIcon, Icon } from '../../components';

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
        <NavigationDesktopItem href={PATHS.TECH_LAB} />
        <NavigationDesktopItem href={PATHS.THESIS} />
        <NavigationDesktopItem href={PATHS.DOOMBOX} />
        <NavigationDesktopItem href={PATHS.ABOUT} />
      </Box>
      <Box display="flex">
        <LinkIcon href={PATHS.EXTERNAL.TWITTER}>
          <Icon type="twitter" />
        </LinkIcon>
        <LinkIcon href={PATHS.EXTERNAL.GITHUB.REPO}>
          <Icon type="github" />
        </LinkIcon>
      </Box>
    </div>
  );
};

export default NavigationDesktop;
