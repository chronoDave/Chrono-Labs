import React from 'react';

// Core
import { LinkButton } from '../components';

import { ContentPersona } from '../modules';

// Utils
import { ROUTES, TEXT } from '../utils/const';

const NotFoundPage = () => (
  <ContentPersona
    personaProps={{ type: 'sad' }}
    title={TEXT.NOT_FOUND.TITLE}
    description={TEXT.NOT_FOUND.DESCRIPTION}
  >
    <LinkButton variant="h6" href={ROUTES.HOME}>
      Home
    </LinkButton>
  </ContentPersona>
);

export default NotFoundPage;
