import React from 'react';

// Core
import {
  BlockHome,
  Persona,
  Icon,
  LinkButton,
  Typography
} from '../../components';

// Hooks
import { useMediaQuery } from '../../hooks';

// Utils
import { TEXT, EXTERNAL } from '../../utils/const';

// Styles
import classes from './HomeLinks.styles';

const HomeLinks = () => {
  const isMd = useMediaQuery('minWidth', 'md');

  const links = {
    Personal: [
      EXTERNAL.TWITTER,
      EXTERNAL.NIGHTOBLANE,
      EXTERNAL.FFXIV,
      EXTERNAL.LINKEDIN
    ],
    Software: [
      EXTERNAL.GITHUB,
      EXTERNAL.NPM,
      EXTERNAL.ITCH
    ],
    Music: [
      EXTERNAL.BANDCAMP,
      EXTERNAL.SOUNDCLOUD
    ]
  };

  return (
    <BlockHome background="fadeInverse">
      {isMd && (
        <Persona
          type="smug"
          primary={TEXT.HOME.LINKS.TITLE}
          secondary={TEXT.HOME.LINKS.DESCRIPTION}
        />
      )}
      <div className={classes.body}>
        <Typography variant={isMd ? 'h2' : 'h4'} className={classes.title}>
          {TEXT.HOME.LINKS.TITLE}
        </Typography>
        <div className={classes.links}>
          {Object.entries(links).map(([category, items]) => (
            <div key={category} className={classes.category}>
              <Typography variant={isMd ? 'h4' : 'h6'}>
                {category}
              </Typography>
              <div className={classes.categoryItems}>
                {items.map(item => (
                  <LinkButton
                    key={item.name}
                    href={item.href}
                    className={classes.categoryItem}
                  >
                    <Icon type={item.icon} className={classes.categoryIcon} />
                    <Typography color="inherit">
                      {item.name}
                    </Typography>
                  </LinkButton>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </BlockHome>
  );
};

export default HomeLinks;
