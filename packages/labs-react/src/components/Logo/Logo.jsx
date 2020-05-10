import React from 'react';
import { useLocation } from 'wouter';
import PropTypes from 'prop-types';

// Core
import { Button } from '../Button';

const Logo = ({ size }) => {
  const [, setLocation] = useLocation();

  return (
    <Button variant="ornate" onChange={() => setLocation('/')}>
      <img src={`assets/logo@${size}x.png`} alt="ChronoLabs logo" />
    </Button>
  );
};

Logo.propTypes = {
  size: PropTypes.oneOf([2, 3])
};

Logo.defaultProps = {
  size: 3
};

export default Logo;
