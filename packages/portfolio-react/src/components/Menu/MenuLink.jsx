import React from 'react';
import clsx from 'clsx';
import { useRoute } from 'wouter';
import PropTypes from 'prop-types';

// Utils
import { PATH_NAMES } from '../../utils/const';

// Styles
import { useMenuStyles } from './Menu.style';

const MenuLink = ({ href, ...rest }) => {
  const [match] = useRoute(href);

  const classes = useMenuStyles();

  return (
    <a
      href={href}
      className={clsx(
        classes.link,
        { [classes.linkActive]: match }
      )}
      {...rest}
    >
      {PATH_NAMES[href]}
    </a>
  );
};

MenuLink.propTypes = {
  href: PropTypes.string.isRequired
};

export default MenuLink;
