import React from 'react';

import { useBackgroundStyles } from './Background.style';

const Background = () => {
  const classes = useBackgroundStyles();

  return <div className={classes.root} />;
};

export default Background;
