import React from 'react';
import { useRoute } from 'wouter';
import clsx from 'clsx';
import PropTypes from 'prop-types';

// Utils
import { PATH_NAMES } from '../../utils/const';

// Styles
import { useNavigationDesktopStyles } from './NavigationDesktop.style';

const NavigationDesktopItem = ({ href }) => {
  const [matches] = useRoute(href);

  const classes = useNavigationDesktopStyles();

  return (
    <a
      href={href}
      className={clsx(
        classes.item,
        { [classes.itemActive]: matches }
      )}
    >
      {PATH_NAMES[href]}
    </a>
  );
};

NavigationDesktopItem.propTypes = {
  href: PropTypes.string.isRequired
};

export default NavigationDesktopItem;
