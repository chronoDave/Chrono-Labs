import React, { Fragment, useState, useRef } from 'react';
import { useLocation } from 'wouter';

// Icons
import IconMenu from '@material-ui/icons/Menu';

// Core
import {
  ClickAwayListener,
  IconButton,
  Box,
  Typography
} from '@material-ui/core';

import {
  Icon,
  LinkIcon,
  Menu,
  MenuLink
} from '../../components';

// Utils
import { PATHS, PATH_NAMES } from '../../utils/const';

const NavigationMobile = () => {
  const anchorEl = useRef(null);
  const [open, setOpen] = useState(false);

  const [location] = useLocation();

  return (
    <Fragment>
      <ClickAwayListener onClickAway={() => setOpen(false)}>
        <Box
          position="sticky"
          top={0}
          p={1}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          bgcolor="text.primary"
          color="common.white"
          zIndex={100}
        >
          <Box flexGrow={1} flexBasis={0}>
            <IconButton
              color="inherit"
              aria-controls="menu-navigation"
              aria-haspopup="true"
              onClick={() => setOpen(!open)}
              ref={anchorEl}
            >
              <IconMenu />
            </IconButton>
          </Box>
          <Box flexGrow={1} flexBasis={0}>
            <Typography align="center">
              {PATH_NAMES[location]}
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="flex-end"
            flexGrow={1}
            flexBasis={0}
          >
            <LinkIcon href={PATHS.EXTERNAL.TWITTER}>
              <Icon type="twitter" />
            </LinkIcon>
            <LinkIcon href={PATHS.EXTERNAL.GITHUB.REPO}>
              <Icon type="github" />
            </LinkIcon>
          </Box>
        </Box>
      </ClickAwayListener>
      <Menu
        id="menu-navigation"
        anchorEl={anchorEl.current}
        open={open}
        onClose={() => setOpen(false)}
      >
        <MenuLink href={PATHS.HOME} />
        <MenuLink href={PATHS.DOOMBOX} />
        <MenuLink href={PATHS.THESIS} />
        <MenuLink href={PATHS.KIZUNA_AI} />
        <MenuLink href={PATHS.ABOUT} />
      </Menu>
    </Fragment>
  );
};

export default NavigationMobile;
