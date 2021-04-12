import { mtx, Mtx } from 'mtx';

import {
  ContentLanding,
  ContentAbout,
  ContentWorks,
  ContentLinks
} from '../content';

export class HomePage extends Mtx {
  view() {
    return [
      <ContentLanding />,
      <ContentAbout />,
      <ContentWorks />,
      <ContentLinks />
    ];
  }
}
