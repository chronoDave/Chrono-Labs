import React from 'react';
import { useLocation } from 'wouter';
import PropTypes from 'prop-types';

// Core
import { Button } from '../../components';

const NavigationItem = ({ path, primary }) => {
  const [location, setLocation] = useLocation();
  return (
    <Button
      onChange={() => setLocation(path)}
      margin={[1, 0.5]}
      variant="ornate"
      active={location === path}
    >
      {primary}
    </Button>
  );
};

NavigationItem.propTypes = {
  path: PropTypes.string.isRequired,
  primary: PropTypes.string.isRequired
};

export default NavigationItem;
