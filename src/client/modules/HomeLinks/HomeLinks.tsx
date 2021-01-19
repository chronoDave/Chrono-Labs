import React from 'react';
import { useLocation } from 'wouter';

// Core
import { Icon, ButtonBase, Typography } from '../../components';

// Modules
import { HomeBlock } from '../HomeBlock';

// Utils
import { TEXT, ROUTES } from '../../utils/const';

// Styles
import classes from './HomeLinks.styles';

const HomeLinks = () => {
  const [, setLocation] = useLocation();

  const links = {
    Personal: [
      ROUTES.EXTERNAL.FFXIV,
      ROUTES.EXTERNAL.TWITTER,
      ROUTES.EXTERNAL.NIGHTOBLANE,
      ROUTES.EXTERNAL.LINKEDIN
    ],
    Software: [
      ROUTES.EXTERNAL.GITHUB,
      ROUTES.EXTERNAL.NPM,
      ROUTES.EXTERNAL.ITCH
    ],
    Music: [
      ROUTES.EXTERNAL.BANDCAMP,
      ROUTES.EXTERNAL.SOUNDCLOUD
    ]
  };

  return (
    <HomeBlock
      className={classes.root}
      title={TEXT.HOME.LINKS.TITLE}
      persona={{
        variant: 'wink',
        primary: 'Links',
        secondary: TEXT.HOME.LINKS.DESCRIPTION
      }}
    >
      <div className={classes.body}>
        {(Object
          .entries(links)
          .map(([category, routes]) => (
            <div key={category} className={classes.category}>
              <Typography variant="h4">
                {category}
              </Typography>
              <div className={classes.links}>
                {routes.map(({
                  NAME,
                  HANDLE,
                  HREF,
                  ICON
                }) => (
                  <ButtonBase
                    key={NAME}
                    onClick={() => setLocation(HREF)}
                    className={classes.button}
                  >
                    <Icon type={ICON} className={classes.icon} />
                    <div className={classes.text}>
                      <Typography variant="h6" color="inherit">
                        {NAME}
                      </Typography>
                      <Typography color="inherit">
                        {HANDLE}
                      </Typography>
                    </div>
                  </ButtonBase>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </HomeBlock>
  );
};

export default HomeLinks;
