import m from 'mithril';
import { mtx, Mtx } from 'mtx';

import { Divider, Typography } from '../../components';

import './PageHeader.scss';

export interface PageHeaderProps {
  src: string
  type: string
  title: string
  date: string
}

export class PageHeader extends Mtx<PageHeaderProps> {
  view({ attrs }: m.Vnode<PageHeaderProps>) {
    const {
      src,
      type,
      title,
      date
    } = attrs;

    return (
      <div className="page-header">
        <img src={src} alt={title} />
        <Divider />
        <Typography center variant="h5">
          {type}
        </Typography>
        <Typography center component="h1" variant="h3">
          {title}
        </Typography>
        <Typography center>
          {date}
        </Typography>
        <Divider />
      </div>
    );
  }
}
