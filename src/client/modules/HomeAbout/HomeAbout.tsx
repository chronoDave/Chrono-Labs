import React from 'react';

// Core
import {
  BlockHome,
  Typography,
  LinkButton,
  Persona
} from '../../components';

// Hooks
import { useMediaQuery } from '../../hooks';

// Utils
import { ROUTES, TEXT } from '../../utils/const';

// Styles
import classes from './HomeAbout.styles';

const HomeAbout = () => {
  const isMd = useMediaQuery('minWidth', 'md');

  return (
    <BlockHome background="fadeInverse">
      {isMd && (
        <Persona
          type="smug"
          primary={TEXT.HOME.ABOUT.NAME}
          secondary={`a.k.a. ${TEXT.HOME.ABOUT.ALTS.join(', ')}`}
        />
      )}
      <div className={classes.body}>
        <Typography variant={isMd ? 'h2' : 'h4'} className={classes.title}>
          {TEXT.HOME.ABOUT.TITLE}
        </Typography>
        <Typography variant="h6">
          {TEXT.HOME.ABOUT.DESCRIPTION}
        </Typography>
        <LinkButton
          variant="h6"
          href={ROUTES.ABOUT}
          className={classes.button}
        >
          Read more
        </LinkButton>
      </div>
    </BlockHome>
  );
};

export default HomeAbout;
