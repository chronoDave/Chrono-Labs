import m from 'mithril';
import { mtx, Mtx } from 'mtx';

import { Typography } from '../Typography/Typography';
import { Link } from '../Link/Link';

import './Quote.scss';

export interface QuoteProps {
  title: string
  source: string
  href?: string
}

export class Quote extends Mtx<QuoteProps> {
  view({ attrs }: m.Vnode<QuoteProps>) {
    const { title, source, href } = attrs;

    return (
      <blockquote className="quote">
        <Typography>
          {`"${title}" - `}
        </Typography>
        {href ? (
          <Link underline href={href}>
            {source}
          </Link>
        ) : (
          <Typography>
            {source}
          </Typography>
        )}
      </blockquote>
    );
  }
}
