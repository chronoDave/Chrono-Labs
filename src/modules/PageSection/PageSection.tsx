import m from 'mithril';
import { mtx, Mtx } from 'mtx';

import { Divider, Typography } from '../../components';

export interface PageSectionProps {
  title: string
}

export class PageSection extends Mtx<PageSectionProps> {
  view({ attrs }: m.Vnode<PageSectionProps>) {
    const { title } = attrs;

    return [
      <Divider />,
      <Typography center component="h2" variant="h4">
        {title}
      </Typography>,
      <Divider />
    ];
  }
}
