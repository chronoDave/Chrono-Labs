import m from 'mithril';
import { mtx, Mtx } from 'mtx';

import {
  Block,
  Link,
  Typography
} from '../../components';

import { getMediaQuery } from '../../utils';

import './ContentWorks.scss';

export interface ContentWork {
  id: string,
  name: string,
  title: string,
  description: string,
  images: {
    og: string,
    [key: string]: string
  },
  alt?: string
}

export interface ContentWorksProps {
  works: ContentWork[]
}

export class ContentWorks extends Mtx<ContentWorksProps> {
  view({ attrs }: m.Vnode<ContentWorksProps>) {
    const { works } = attrs;

    const isMd = getMediaQuery('md');

    return (
      <Block maxWidth="xl" className="content-works">
        {works.map(route => (
          <div key={route.id} className="content-works-work">
            <Typography component="h3" variant={isMd ? 'h4' : 'h5'}>
              {route.title}
            </Typography>
            <img
              alt={route.alt}
              src={isMd ?
                route.images['2x'] || route.images.og :
                route.images['1x'] || route.images.og
              }
            />
            <Typography variant="h6">
              {route.description}
            </Typography>
            <div>
              <Link button href={`${route.name}.html`}>
                Read more
              </Link>
            </div>
          </div>
        ))}
      </Block>
    );
  }
}
