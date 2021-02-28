import React from 'react';

// Core
import { Typography, LinkButton } from '../../components';

// Hooks
import { useMediaQuery } from '../../hooks';

// Styles
import classes from './ContentWork.styles';

export interface ContentWorkProps {
  title: string,
  description: string,
  src: string,
  href: string
}

const ContentWork = (props: ContentWorkProps) => {
  const {
    title,
    description,
    src,
    href
  } = props;
  const isMd = useMediaQuery('minWidth', 'md');

  return (
    <div className={classes.root}>
      <Typography variant={isMd ? 'h4' : 'h6'} className={classes.title}>
        {title}
      </Typography>
      <img src={src} alt={title} className={classes.image} />
      <Typography variant={isMd ? 'h6' : 'body'} className={classes.description}>
        {description}
      </Typography>
      <LinkButton
        href={href}
        variant={isMd ? 'h6' : 'body'}
        className={classes.button}
      >
        Read more
      </LinkButton>
    </div>
  );
};

export default ContentWork;
