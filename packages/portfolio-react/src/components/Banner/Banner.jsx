import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { useBannerStyles } from './Banner.style';

const Banner = ({ id }) => {
  const classes = useBannerStyles();

  return (
    <img
      className={classes.root}
      alt={`Banner ${id}`}
      src={`assets/images/banner_${id}.jpg`}
    />
  );
};

Banner.propTypes = {
  id: PropTypes.string.isRequired
};

export default Banner;
