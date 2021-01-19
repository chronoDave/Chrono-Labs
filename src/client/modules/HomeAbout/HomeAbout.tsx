import React from 'react';
import { useLocation } from 'wouter';

// Core
import { Typography, Button } from '../../components';

// Modules
import { HomeBlock } from '../HomeBlock';

// Utils
import { ROUTES, TEXT } from '../../utils/const';

// Styles
import classes from './HomeAbout.styles';

const HomeAbout = () => {
  const [, setLocation] = useLocation();

  return (
    <HomeBlock
      className={classes.root}
      title={TEXT.HOME.ABOUT.TITLE}
      persona={{
        variant: 'smug',
        primary: TEXT.HOME.ABOUT.NAME,
        secondary: `a.k.a. ${TEXT.HOME.ABOUT.ALTS.join(', ')}`
      }}
    >
      <Typography variant="h6">
        {TEXT.HOME.ABOUT.DESCRIPTION}
      </Typography>
      <Button
        variant="h6"
        label="Read more"
        className={classes.button}
        onClick={() => setLocation(ROUTES.ABOUT)}
      />
    </HomeBlock>
  );
};

export default HomeAbout;
