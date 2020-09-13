import React from 'react';

// Core
import { Link, Box, Typography } from '@material-ui/core';

// Utils
import { PATHS } from '../../../utils/const';

// Private
import NavigationDesktopItem from './NavigationDesktopItem.private';

// Style
import { useNavigationStyle } from '../Navigation.style';

const NavigationDesktop = () => {
  const classes = useNavigationStyle();

  const links = [
    { path: PATHS.HOME, label: 'Home' },
    { path: PATHS.DOOMBOX, label: 'Doombox' },
    { path: PATHS.THESIS, label: 'Thesis' },
    { path: PATHS.UNMEI_NO_HOSHI, label: 'Touhou Unmei no Hoshi' },
    { path: PATHS.ABOUT, label: 'About' }
  ];

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box display="flex">
        {links.map(({ path, label }, i) => (
          <NavigationDesktopItem
            key={path}
            path={path}
            label={label}
            hasBorder={i < links.length - 1}
          />
        ))}
      </Box>
      <Box display="flex" flexDirection="column" alignItems="flex-end" pr={1.5}>
        <Typography variant="h4" classes={{ root: classes.logo }}>
          chronoDave
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          px={1}
          py={0.5}
          alignItems="flex-end"
        >
          <Typography variant="subtitle2">
            Dutch programmer &amp; designer
          </Typography>
          <Link href={PATHS.EXTERNAL.GITHUB.REPO}>
            Source (GitHub)
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default NavigationDesktop;
