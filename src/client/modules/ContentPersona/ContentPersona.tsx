import m from 'mithril';
import { mtx, Mtx } from 'mtx';

import {
  Block,
  BlockProps,
  Typography,
  Persona,
  PersonaProps
} from '../../components';
import { ContentHeader, ContentHeaderProps } from '../ContentHeader/ContentHeader';

import { cx, getMediaQuery } from '../../utils';

import './ContentPersona.scss';

export interface ContentPersonaProps extends BlockProps, ContentHeaderProps {
  persona: PersonaProps['type'],
  content: 'body' | 'header',
  body?: boolean
  className?: string
  alt?: string
}

export class ContentPersona extends Mtx<ContentPersonaProps> {
  view({ children, attrs }: m.Vnode<ContentPersonaProps>) {
    const {
      title,
      description,
      alt,
      content,
      className,
      persona
    } = attrs;

    const isMd = getMediaQuery('md');

    return (
      <Block
        className={cx(
          'content-persona',
          `content-persona-${content}`,
          className
        )}
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
          <ContentHeader header={content === 'header'} title={title} description={description} />
          {children}
        </div>
      </Block>
    );
  }
}
