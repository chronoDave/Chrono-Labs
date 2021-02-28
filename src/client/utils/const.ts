export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  WORKS: '/works',
  LINKS: '/links',
  WORK: (id = ':id') => `/works/${id}`
};

export const EXTERNAL = {
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
    href: ROUTES.WORK('tunh')
  },
  DOOMBOX: {
    title: 'Doombox',
    description: 'Doombox is a music player designed and built to support a large, personal music collection. It\'s free, open source and high customizable.',
    href: ROUTES.WORK('doombox')
  },
  THESIS: {
    title: 'Thesis',
    description: 'Can a game be developed where the story makes use of the interactivity the medium provides?',
    href: ROUTES.WORK('thesis')
  },
  PORTFOLIO: {
    title: 'Portfolio',
    description: 'Source (GitHub)',
    href: 'https://github.com/chronoDave/Portfolio'
  }
};

export const TEXT = {
  NOT_FOUND: {
    TITLE: '404.',
    DESCRIPTION: 'Error. Page not Found, mismatch.'
  },
  HOME: {
    TITLE: 'CHRONODAVE',
    DESCRIPTION: 'MULTIMEDIA DESIGNER',
    ABOUT: {
      TITLE: 'ABOUT',
      DESCRIPTION: 'David Wolters is a minimalist multimedia designer and spends most of his time developing software and games, such as Doombox and Touhou: Star of Destiny. He values customization, transparency and privacy and is an advocate for open-source software.',
      NAME: 'David Wolters',
      ALTS: [
        'ChronoDave',
        'Chronocide',
        'NIGHTOBLANE'
      ]
    },
    WORKS: {
      TITLE: 'WORKS'
    },
    LINKS: {
      TITLE: 'LINKS',
      DESCRIPTION: 'You can find me and my works in these places'
    }
  }
};
