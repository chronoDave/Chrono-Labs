import m from 'mithril';
import { mtx, Mtx } from 'mtx';

import {
  Typography,
  Link,
  List,
  ListItem
} from '../../components';
import { Page, PageHeader, PageSection } from '../../modules';

export class DoomboxPage extends Mtx {
  view() {
    return (
      <Page content lastUpdated="April 22, 2021">
        <PageHeader
          src="/assets/images/doombox@2x.png"
          type="Personal project"
          title="Doombox"
          date="April 17th, 2018 - Current"
        />
        <Typography paragraph>
          Doombox is a music player designed and built to support a large, personal music collection. It's <Link href="https://github.com/chronoDave/Doombox/releases" underline>free</Link>, <Link href="https://github.com/chronoDave/Doombox" underline>open source</Link> and high customizable. It's built with <Link underline href="https://electronjs.org/">Electron </Link> and <Link underline href="https://reactjs.org/">React</Link> and supports both Windows and Mac operating systems.
        </Typography>
        <Typography>
          It currently features:
        </Typography>
        <List>
          <ListItem>
            <b>A full responsive design on both axis</b>. Originally designed for <b>640 x 480</b>, it now supports resolutions as low as <b>320 x 240</b>.
          </ListItem>
          <ListItem>
            <b>Speed</b>. Doombox uses a custom virtualization implementation to keep things <i>fast</i>.
          </ListItem>
          <ListItem>
            <b>Grouping</b>. Doombox natively supports grouping by label, making navigation through large(r) music libraries easy.
          </ListItem>
          <ListItem>
            <b>Localization</b>. Doombox implements its own localization tags, which can be used to switch between native and localized tags.
          </ListItem>
          <ListItem>
            <b>Native</b>. Doombox is built with Electron and extends its native capabilities. This is includes things such as MediaMetadata, menus and more.
          </ListItem>
        </List>
        <Typography>
          You can download it for free on <Link underline href="https://github.com/chronoDave/Doombox/releases">GitHub</Link>
        </Typography>
        <PageSection title="History" />
        <Typography paragraph>
          I've been working on Doombox for nearly 2 years as of writing, and a lot has changed over the years. I personally find it very interesting to see how both my skills and needs have changed and how this reflects in the overal design.
        </Typography>
        <img
          src="/assets/images/doombox-poc.jpg"
          alt="Doombox proof of concept (blurred image is censored)"
        />
        <video controls="true" allowfullscreen="true">
          <source src="/assets/videos/20190423195521.mp4" type="video/mp4" />
          <caption align="center">
            Doombox vertical slice
          </caption>
        </video>
        <img
          src="/assets/images/doombox-v1.jpg"
          alt="Doombox v1"
        />
        <img
          src="/assets/images/doombox-v2.png"
          alt="Doombox v2"
        />
      </Page>
    );
  }
}

m.mount(document.body, DoomboxPage);
