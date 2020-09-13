import React from 'react';
import { useRoute } from 'wouter';
import clsx from 'clsx';
import PropTypes from 'prop-types';

// Core
import { Box, Link } from '@material-ui/core';

// Style
import { useNavigationStyle } from '../Navigation.style';

const NavigationDesktopItem = ({ path, label, hasBorder }) => {
  const [match] = useRoute(path);
  const classes = useNavigationStyle();

  return (
    <Box
      key={path}
      px={1.5}
      my={0.75}
      borderRight={hasBorder ? 1 : 0}
      color="grey.600"
      height="fit-content"
    >
      <Link
        href={path}
        className={clsx(
          classes.linkRoot,
          classes.linkHover,
          { [classes.linkActive]: match }
        )}
        underline="none"
      >
        {label}
      </Link>
    </Box>
  );
};

NavigationDesktopItem.defaultProps = {
  hasBorder: false
};

NavigationDesktopItem.propTypes = {
  path: PropTypes.string.isRequired,
  hasBorder: PropTypes.bool,
  label: PropTypes.string.isRequired
};

export default NavigationDesktopItem;
