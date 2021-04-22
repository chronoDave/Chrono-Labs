import m from 'mithril';
import { mtx, Mtx } from 'mtx';

import { Link, Typography, Icon } from '../../components';

import { Page, ContentPersona } from '../../modules';

import { getMediaQuery } from '../../utils';
import { STATIC_ROUTES, EXTERNAL_ROUTES } from '../../routes';

import './Contact.page.scss';

export class ContactPage extends Mtx {
  view() {
    const links = {
      Personal: [
        EXTERNAL_ROUTES.TWITTER,
        EXTERNAL_ROUTES.NIGHTOBLANE,
        EXTERNAL_ROUTES.FFXIV,
        EXTERNAL_ROUTES.LINKEDIN
      ],
      Software: [
        EXTERNAL_ROUTES.GITHUB,
        EXTERNAL_ROUTES.NPM,
        EXTERNAL_ROUTES.ITCH
      ],
      Music: [
        EXTERNAL_ROUTES.BANDCAMP,
        EXTERNAL_ROUTES.SOUNDCLOUD
      ]
    };

    const isMd = getMediaQuery('md');

    return (
      <Page>
        <ContentPersona
          content="header"
          persona="wink"
          alt={STATIC_ROUTES.CONTACT.description}
          title={STATIC_ROUTES.CONTACT.title.toUpperCase()}
          description={!isMd ? STATIC_ROUTES.CONTACT.description : undefined}
        >
          {Object.entries(links).map(([category, routes]) => [(
            <Typography component="h3" variant="h5">
              {category}
            </Typography>
          ), (
            <ul className="contact-page-ul">
              {routes.map(route => (
                <li key={route.id}>
                  <Link button href={route.href}>
                    {<Icon small id={route.id as any} />}
                    {route.title}
                  </Link>
                </li>
              ))}
            </ul>
          )])}
        </ContentPersona>
      </Page>
    );
  }
}

m.mount(document.body, ContactPage);
