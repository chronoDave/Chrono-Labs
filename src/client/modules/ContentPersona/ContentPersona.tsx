import m from 'mithril';
import { mtx, Mtx } from 'mtx';

import {
  Block,
  BlockProps,
  Typography,
  Link,
  Persona,
  PersonaProps
} from '../../components';

import { cx, getMediaQuery } from '../../utils';

import './ContentPersona.scss';

export interface ContentPersonaProps extends BlockProps {
  title: string
  description: string
  persona: PersonaProps['type'],
  className?: string
  alt?: string
  href?: string
}

export class ContentPersona extends Mtx<ContentPersonaProps> {
  view({ attrs }: m.Vnode<ContentPersonaProps>) {
    const {
      title,
      description,
      href,
      alt,
      className,
      persona
    } = attrs;

    const isMd = getMediaQuery('md');

    return (
      <Block
        className={cx('content-persona', className)}
        maxWidth="md"
      >
        {isMd && (
          <div className="avatar">
            <Persona type={persona} />
            {alt && (
              <Typography>
                {alt}
              </Typography>
            )}
          </div>
        )}
        <div className="text">
          <Typography
            component="h2"
            variant={isMd ? 'h2' : 'h3'}
            paragraph
          >
            {title}
          </Typography>
          <Typography paragraph variant="h6">
            {description}
          </Typography>
          {href && (
            <Link button href={href}>
              Read more
            </Link>
          )}
        </div>
      </Block>
    );
  }
}
