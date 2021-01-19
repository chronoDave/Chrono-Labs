import React from 'react';
import { cx } from '@emotion/css';

// Core
import { Typography } from '../../components';

// Hooks
import { useTheme } from '../../hooks';

// Assets
import gifSmug6x from '../../assets/smug@6x.gif';
import gifWink6x from '../../assets/wink@6x.gif';

// Styles
import classes from './HomeBlock.styles';

export interface HomeBlockProps {
  persona: {
    variant: 'smug' | 'wink',
    primary: string,
    secondary?: string
  },
  title: string,
  className?: string,
  children?: React.ReactNode
}

const HomeBlock = (props: HomeBlockProps) => {
  const {
    persona,
    title,
    className,
    children,
  } = props;
  const { mixins } = useTheme();

  const personas = {
    smug: {
      src: gifSmug6x,
      alt: 'smug'
    },
    wink: {
      src: gifWink6x,
      alt: 'wink'
    }
  };

  return (
    <div className={cx(classes.root, className)}>
      <div className={classes.persona}>
        <img
          src={personas[persona.variant].src}
          alt={personas[persona.variant].alt}
          width={mixins.persona}
          height={mixins.persona}
          className={classes.personaImage}
        />
        <div className={classes.personaText}>
          <Typography variant="h5">
            {persona.primary}
          </Typography>
          {persona.secondary && (
            <Typography className={classes.personaSecondary}>
              {persona.secondary}
            </Typography>
          )}
        </div>
      </div>
      <div className={classes.body}>
        <Typography variant="h2" className={classes.title}>
          {title}
        </Typography>
        {children}
      </div>
    </div>
  );
};

export default HomeBlock;
