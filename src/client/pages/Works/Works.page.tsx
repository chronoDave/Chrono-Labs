import { mtx, Mtx } from 'mtx';

import { ContentWorks, ContentHeader } from '../modules';

import { STATIC_ROUTES } from '../../routes';

export class WorksPage extends Mtx {
  view() {
    return [(
      <ContentHeader
        header
        title={STATIC_ROUTES.WORKS.title}
        description={STATIC_ROUTES.WORKS.description}
      />
    ), (
      <ContentWorks
        works={[
          STATIC_ROUTES.TUHN,
          STATIC_ROUTES.DOOMBOX,
          STATIC_ROUTES.THESIS
        ]}
      />
    )];
  }
}
