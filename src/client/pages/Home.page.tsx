import React, { Fragment } from 'react';

// Core
import { BlockHome, LinkButton } from '../components';

import {
  ContentCover,
  ContentPersona,
  ContentWorks,
  ContentLinks
} from '../modules';

// Utils
import { ROUTES, TEXT } from '../utils/const';

const HomeRoute = () => (
  <Fragment>
    <ContentCover />
    <ContentPersona
      personaProps={{
        type: 'smug',
        primary: TEXT.HOME.ABOUT.NAME,
        secondary: `a.k.a. ${TEXT.HOME.ABOUT.ALTS.join(', ')}`
      }}
      title={TEXT.HOME.ABOUT.TITLE}
      description={TEXT.HOME.ABOUT.DESCRIPTION}
    >
      <LinkButton variant="h6" href={ROUTES.ABOUT}>
        Read more
      </LinkButton>
    </ContentPersona>
    <BlockHome background="fade" disableSpacer flex="column">
      <ContentWorks />
    </BlockHome>
    <ContentLinks />
  </Fragment>
);

export default HomeRoute;
