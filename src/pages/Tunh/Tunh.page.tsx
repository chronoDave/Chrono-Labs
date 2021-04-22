import m from 'mithril';
import { Mtx, mtx } from 'mtx';

import {
  Typography,
  Link,
  Divider,
  List,
  ListItem
} from '../../components';
import { Page, PageHeader } from '../../modules';

export class TunhPage extends Mtx {
  view() {
    return (
      <Page content lastUpdated="April 22, 2021">
        <PageHeader
          src="/assets/images/tunh@2x.png"
          type="Personal project"
          title="東方運命の星 (Touhou Unmei no Hoshi)"
          date="October 10th, 2018 - March 4th, 2020"
        />
        <Divider />
        <iframe
          src="https://itch.io/embed/581378"
          width="100%"
          height="167"
          frameborder="0"
        >
          <a href="https://chrono-dave.itch.io/unh">
            Touhou ~ Unmei no Hoshi ~ / 東方運命の星 by chronoDave
          </a>
        </iframe>
        <iframe
          src="https://bandcamp.com/EmbeddedPlayer/album=1895131296/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/artwork=small/transparent=true/"
          style="border:0; width:100%; height:120px; margin-top:20px"
          seamless
        >
          <a href="https://chronodave.bandcamp.com/album/original-soundtrack">
            東方運命の星 Original Soundtrack by Chronocide
          </a>
        </iframe>
        <Divider />
        <Typography paragraph>
          東方運命の星 (Touhou Unmei no Hoshi) is a <Link underline href="https://en.wikipedia.org/wiki/Touhou_Project">Touhou</Link> fangame made with the <Link underline href="https://lexaloffle.com/pico-8.php">PICO-8 fantasy console</Link>, where you shoot bullets at the enemy whilst avoiding getting shot yourself.
        </Typography>
        <Typography>
          As PICO-8 is a rather limited console, the game contains the following features:
        </Typography>
        <List>
          <ListItem>
            <b>2 playable characters</b> Reimu Hakurai and Marisa Kirisame.
          </ListItem>
          <ListItem>
            <b>4 enemies</b> with a total of <b>16 spellcards</b>.
          </ListItem>
          <ListItem>
            <b>5 unique music tracks</b>, which can be listened to in the Music Room.
          </ListItem>
          <ListItem>
            A rudimentary score system.
          </ListItem>
          <ListItem>
            A practice system, where each boss can be practiced against.
          </ListItem>
        </List>
        <Typography>
          And the following mechanics:
        </Typography>
        <List>
          <ListItem>
            <b>Slow</b>, your character slows down whilst shooting. How much you slow down depends on your selected character (33% speed for Reimu, 50% for Marisa).
          </ListItem>
          <ListItem>
            <b>Bomb</b>, you start with 3 bombs which can be used to clear the screen. For each enemy you defeat, you get one bomb.
          </ListItem>
          <ListItem>
            <b>Lives</b>, when you get hit, you'll lose a life. When you lose all lives, you game over. Lives cannot be replenished, so don't forget to use your bombs! The amount of lives depends on the difficulty chosen.
          </ListItem>
        </List>
      </Page>
    );
  }
}

m.mount(document.body, TunhPage);
