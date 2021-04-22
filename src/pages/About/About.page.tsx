import m from 'mithril';
import { mtx, Mtx } from 'mtx';

import {
  Persona,
  Typography,
  Link,
  List,
  ListItem
} from '../../components';
import { Page, PageSection } from '../../modules';

import { STATIC_ROUTES, EXTERNAL_ROUTES } from '../../routes';

import './About.page.scss';

export class AboutPage extends Mtx {
  view() {
    return (
      <Page content lastUpdated="April 22, 2021">
        <div className="about-page-avatar">
          <Persona type="happy" />
          <div>
            <Typography component="h1" variant="h4">
              Hey there!
            </Typography>
            <Typography>
              I'm a 23 year old Dutch multimedia designer and I'm currently working as a front-end developer. In my free time I enjoy writing software, creating games and pushing pixels.
            </Typography>
          </div>
        </div>
        <PageSection title="Values" />
        <Typography>
          As a multimedia designer, I keep a couple things in mind when I create something:
        </Typography>
        <List>
          <ListItem>
            <b>Respect privacy</b>. Every user has the right to know how their data is being collected and used. I strive to collect the least amount of data possible, meaning that my website does not use any form of tracking.
          </ListItem>
          <ListItem>
            <b>Embrace transparency</b>. I'm a big supporter of <Link underline href={EXTERNAL_ROUTES.GITHUB.href}>open source software</Link>.
          </ListItem>
          <ListItem>
            <b>Iterate</b>. Nothing is perfect after the first attempt. Iterate often to make sure you're making the <i>right</i> thing.
          </ListItem>
          <ListItem>
            <b>Embrace individuality</b>. Every users has their own desires and it's the role of the designer to make sure those desires are fulfilled, meaning customization and accessibility should be readily available.
          </ListItem>
          <ListItem>
            <b>Form follows function</b>. Everything must be designed for a reason. Remove things that don't have functional value.
          </ListItem>
          <ListItem>
            <b>Less is more</b>. More often than not, the simplest solution is the best solution. Don't overcomplicate things if you don't have to.
          </ListItem>
          <ListItem>
            <b>Physical over digital</b>. If possible, hardware should be physical instead of digital. Tactility matters.
          </ListItem>
        </List>
        <Typography>
          Summarized, I would consider myself a minimalist. I firmly believe that a lot of things we use and interact with daily should be more customizable, accessible and transparent, but also simplified and optimized. Therefore, I strive to uphold these values within my own works.
        </Typography>
        <PageSection title="Personal" />
        <Typography paragraph>
          Outside of work, I thoroughly enjoy listening to music (part of why I created <Link underline href={`${STATIC_ROUTES.DOOMBOX.name}.html`}>Doombox</Link>) and playing games. I'm a proud owner of both vinyl and CD's and I enjoy collecting obscure music.
        </Typography>
        <Typography paragraph>
          When it comes to games, I'm a huge fan of (turn-based) strategy games and JRPG's, such as Europa Universalis 4 and Final Fantasy X.
        </Typography>
        <Typography paragraph>
          Oh, and check out <Link underline href="https://subsetgames.com/">Subset Games</Link> and <Link underline href="https://zachtronics.com/">Zachtronics</Link>. They make amazing games.
        </Typography>
      </Page>
    );
  }
}

m.mount(document.body, AboutPage);
