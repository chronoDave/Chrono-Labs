export const ROUTES = {
  HOME: {
    title: 'Home',
    href: '/'
  },
  ABOUT: {
    title: 'About',
    href: '/about'
  },
  LINKS: {
    title: 'Links',
    href: '/links',
  },
  MARKDOWN: {
    title: 'Markdown',
    href: '/markdown',
  },
  NOT_FOUND: {
    title: 'NotFound',
    href: '/:404',
  },
  WORKS: {
    title: 'Works',
    href: '/works'
  },
  WORK: {
    title: 'Work',
    href: (id = ':id') => `${ROUTES.WORKS.href}/${id}`
  }
};

export const LINKS = {
  TWITTER: {
    name: 'Twitter',
    handle: '@ChronoDave',
    href: 'https://twitter.com/ChronoDave',
    icon: 'twitter'
  },
  ITCH: {
    name: 'itch.io',
    handle: 'chronoDave',
    href: 'https://chrono-dave.itch.io/',
    icon: 'itchio'
  },
  GITHUB: {
    name: 'GitHub',
    handle: 'Chronocide',
    href: 'https://github.com/chronoDave',
    icon: 'github'
  },
  NPM: {
    name: 'npm',
    handle: 'chronocide',
    href: 'https://www.npmjs.com/~chronocide',
    icon: 'npm'
  },
  BANDCAMP: {
    name: 'Bandcamp',
    handle: 'Chronocide',
    href: 'https://chronodave.bandcamp.com/releases',
    icon: 'bandcamp'
  },
  NIGHTOBLANE: {
    name: 'NIGHTOBLANE',
    handle: 'NIGHTOBLANE',
    href: 'https://nightoblane.neocities.org',
    icon: 'nightoblane'
  },
  LINKEDIN: {
    name: 'LinkedIn',
    handle: 'David Wolters',
    href: 'https://www.linkedin.com/in/david-wolters-8b426012a/',
    icon: 'linkedin'
  },
  FFXIV: {
    name: 'Final Fantasy XIV',
    handle: 'Jun Nanase',
    href: 'https://eu.finalfantasyxiv.com/lodestone/character/20489291/#profile',
    icon: 'ffxiv'
  },
  SOUNDCLOUD: {
    name: 'SoundCloud',
    handle: 'Chronocide',
    href: 'https://soundcloud.com/chronocidebit',
    icon: 'soundcloud'
  }
};

export const WORKS = {
  TUHN: {
    title: 'Touhou Star of Destiny',
    description: '東方運命の星 (Touhou Star of Destiny) is a Touhou fangame made with the PICO-8 fantasy console, where you shoot bullets at the enemy whilst avoiding getting shot yourself.',
    href: ROUTES.WORK.href('tunh')
  },
  DOOMBOX: {
    title: 'Doombox',
    description: 'Doombox is a music player designed and built to support a large, personal music collection. It\'s free, open source and high customizable.',
    href: ROUTES.WORK.href('doombox')
  },
  THESIS: {
    title: 'Thesis',
    description: 'Can a game be developed where the story makes use of the interactivity the medium provides?',
    href: ROUTES.WORK.href('thesis')
  },
  PORTFOLIO: {
    title: 'Portfolio',
    description: 'Source (GitHub)',
    href: 'https://github.com/chronoDave/Portfolio'
  }
};
