export const DYNAMIC_ROUTES = {
  WORKS: (id = ':id') => `/works/${id}`
};

export const STATIC_ROUTES = {
  HOME: {
    id: 'home',
    href: '/',
    title: 'ChronoDave - Multimedia Designer | @chronoDave',
    description: 'Dutch multimedia designer currently working as a front-end web developer. I write software, create games and push pixels.',
    image: '/assets/images/happy@6x.gif'
  },
  ABOUT: {
    id: 'about',
    href: '/about',
    title: 'About Me | @chronoDave',
    description: 'Hey there! I\'m chronoDave, a 23-year old Dutch multimedia designer. I currently work as a front-end web developer and in my free time I enjoy writing software, creating games and pushing pixels.',
    image: '/assets/images/happy@6x.gif'
  },
  WORKS: {
    id: 'works',
    href: '/works',
    title: 'Works | @chronoDave',
    description: 'An assorted collection of my projects and works.',
    image: '/assets/images/tunh@2x.gif'
  },
  CONTACT: {
    id: 'contact',
    href: '/contact',
    title: 'Contact | @chronoDave',
    description: 'You can find me and my works in these places.',
    image: '/assets/images/happy@6x.gif'
  },
  TUHN: {
    id: 'tuhn',
    href: DYNAMIC_ROUTES.WORKS('tuhn'),
    title: '東方運命の星 (Touhou Unmei no Hoshi) | @chronoDave',
    description: '東方運命の星 (Touhou Star of Destiny) is a Touhou fangame made with the PICO-8 fantasy console, where you shoot bullets at the enemy whilst avoiding getting shot yourself.',
    image: '/assets/images/tunh@2x.gif'
  },
  DOOMBOX: {
    id: 'doombox',
    href: DYNAMIC_ROUTES.WORKS('doombox'),
    title: 'Doombox | @chronoDave',
    description: 'Doombox is a music player designed and built to support a large, personal music collection. It\'s free, open source and high customizable.',
    image: '/assets/images/doombox@2x.png'
  },
  THESIS: {
    id: 'thesis',
    href: DYNAMIC_ROUTES.WORKS('thesis'),
    title: 'Meaningful Interaction in Narrative-driven Games | @chronoDave',
    description: 'Can games be developed in such a way that the story within the game makes optimal usage of the inherent interactivity of the medium?',
    image: '/assets/images/thesis@2x.png'
  }
};

export const EXTERNAL_ROUTES = {
  TWITTER: {
    id: 'twitter',
    title: 'Twitter',
    description: '@ChronoDave',
    href: 'https://twitter.com/ChronoDave',
  },
  ITCH: {
    id: 'itchio',
    title: 'itch.io',
    href: 'https://chrono-dave.itch.io/',
  },
  GITHUB: {
    id: 'github',
    title: 'GitHub',
    href: 'https://github.com/chronoDave',
  },
  REPO: {
    id: 'portfolio',
    title: 'Source (GitHub)',
    href: 'https://github.com/chronoDave/Portfolio',
  },
  NPM: {
    id: 'npm',
    title: 'npm',
    href: 'https://www.npmjs.com/~chronocide',
  },
  BANDCAMP: {
    id: 'bandcamp',
    title: 'Bandcamp',
    href: 'https://chronodave.bandcamp.com/releases',
  },
  NIGHTOBLANE: {
    id: 'nightoblane',
    title: 'NIGHTOBLANE',
    href: 'https://nightoblane.neocities.org',
  },
  LINKEDIN: {
    id: 'linkedin',
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/david-wolters-8b426012a/',
  },
  FFXIV: {
    id: 'ffxiv',
    title: 'Final Fantasy XIV',
    href: 'https://eu.finalfantasyxiv.com/lodestone/character/20489291/#profile',
  },
  SOUNDCLOUD: {
    id: 'soundcloud',
    title: 'SoundCloud',
    href: 'https://soundcloud.com/chronocidebit',
  }
};
