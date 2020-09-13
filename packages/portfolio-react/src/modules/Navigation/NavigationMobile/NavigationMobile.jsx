import React, { Fragment, useState } from 'react';
import clsx from 'clsx';
import { useLocation } from 'wouter';

// Icons
import IconMenu from '@material-ui/icons/Menu';
import IconIndicator from '@material-ui/icons/NavigateNext';

// Core
import {
  SwipeableDrawer,
  Link,
  ButtonBase,
  Typography,
  Box,
  IconButton
} from '@material-ui/core';

// Utils
import { PATHS } from '../../../utils/const';

// Style
import { useNavigationStyle } from '../Navigation.style';

const NavigationMobile = () => {
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const classes = useNavigationStyle();

  const id = 'menu-navigation';
  const links = [
    { path: PATHS.HOME, label: 'Home' },
    { path: PATHS.DOOMBOX, label: 'Doombox' },
    { path: PATHS.THESIS, label: 'Thesis' },
    { path: PATHS.UNMEI_NO_HOSHI, label: 'Touhou Unmei no Hoshi' },
    { path: PATHS.ABOUT, label: 'About' }
  ];

  return (
    <Fragment>
      <div className={classes.rootMobile}>
        <IconButton
          onClick={() => setOpen(!open)}
          color="inherit"
          aria-describedby={id}
        >
          <IconMenu />
        </IconButton>
        <ButtonBase
          onClick={() => setLocation(PATHS.HOME)}
          classes={{ root: classes.logoMobile }}
        >
          <Typography variant="h6">
            chronoDave
          </Typography>
          <Typography variant="caption">
            Dutch programmer &amp; designer
          </Typography>
        </ButtonBase>
      </div>
      <SwipeableDrawer
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.drawerHeader} />
        <Box p={1} display="flex" flexDirection="column">
          {links.map(({ path, label }) => (
            <Link
              key={path}
              href={path}
              classes={{ root: classes.linkRoot }}
              className={clsx(
                classes.linkRootMobile,
                { [classes.linkActive]: location === path }
              )}
            >
              <IconIndicator classes={{ root: classes.linkIcon }} />
              {label}
            </Link>
          ))}
        </Box>
      </SwipeableDrawer>
    </Fragment>
  );
};

export default NavigationMobile;
