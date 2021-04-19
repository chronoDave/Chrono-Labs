import m from 'mithril';
import { mtx, Mtx } from 'mtx';

import { Block, BlockProps, Typography } from '../../components';

import { cx, getMediaQuery } from '../../utils';

import './ContentHeader.scss';

export interface ContentHeaderProps extends BlockProps {
  title: string
  header?: boolean
  description?: string
}

export class ContentHeader extends Mtx<ContentHeaderProps> {
  view({ attrs }: m.Vnode<ContentHeaderProps>) {
    const {
      title,
      description,
      className,
      header,
      ...rest
    } = attrs;

    const isMd = getMediaQuery('md');

    return (
      <Block
        className={cx('content-header', className)}
        maxWidth="md"
        {...rest}
      >
        <Typography
          component={header ? 'h1' : 'h2'}
          variant={isMd ? 'h3' : 'h4'}
          paragraph
        >
          {title}
        </Typography>
        {description && (
          <Typography paragraph variant="h6">
            {description}
          </Typography>
        )}
      </Block>
    );
  }
}
