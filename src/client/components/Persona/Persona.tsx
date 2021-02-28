import React from 'react';
import { cx } from '@emotion/css';

// Core
import { Typography } from '../Typography';

// Styles
import classes from './Persona.styles';

const images = {
  smug: 'assets/images/smug@6x.gif',
  wink: 'assets/images/wink@6x.gif',
  happy: 'assets/images/happy@6x.gif',
  sad: 'assets/images/sad@6x.gif'
};

export interface PersonaProps {
  type: keyof typeof images,
  primary?: string,
  secondary?: string,
  className?: string
}

const Persona = (props: PersonaProps) => {
  const {
    type,
    primary,
    secondary,
    className
  } = props;

  return (
    <div className={cx(classes.root, className)}>
      <img
        src={images[type]}
        alt={type}
        className={classes.image}
      />
      {primary && (
        <div className={classes.body}>
          <Typography variant="h6">
            {primary}
          </Typography>
          {secondary && (
            <Typography className={classes.description}>
              {secondary}
            </Typography>
          )}
        </div>
      )}
    </div>
  );
};

export default Persona;
