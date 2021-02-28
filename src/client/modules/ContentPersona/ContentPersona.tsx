import React from 'react';

// Core
import {
  Persona,
  PersonaProps,
  BlockHome,
  BlockHomeProps,
  Typography
} from '../../components';

// Hooks
import { useMediaQuery } from '../../hooks';

// Styles
import classes from './ContentPersona.styles';

export interface ContentPersonaProps {
  background?: BlockHomeProps['background'],
  personaProps: PersonaProps,
  title: string,
  description: string,
  children: React.ReactNode
}

const ContentPersona = (props: ContentPersonaProps) => {
  const {
    background = 'fadeInverse',
    personaProps,
    title,
    description,
    children
  } = props;
  const isMd = useMediaQuery('minWidth', 'md');

  return (
    <BlockHome background={background}>
      {isMd && <Persona {...personaProps} />}
      <div className={classes.root}>
        <Typography variant={isMd ? 'h2' : 'h4'} className={classes.title}>
          {title}
        </Typography>
        <Typography variant="h6">
          {description}
        </Typography>
        <div className={classes.action}>
          {children}
        </div>
      </div>
    </BlockHome>
  );
};

export default ContentPersona;
