export const DYNAMIC_ROUTES = {
  WORK: (id = ':id') => `/works/${id}`
};

export interface StaticRoute {
  id: string,
  href: string,
  title: string,
  description: string,
  images: {
    og: string,
    [key: string]: string
  }
}

export const STATIC_ROUTES: { [key: string]: StaticRoute } = {
  HOME: {
    id: 'home',
    href: '/',
    title: 'ChronoDave - Multimedia Designer',
    description: 'Dutch multimedia designer currently working as a front-end web developer. I write software, create games and push pixels.',
    images: {
      og: '/assets/images/happy@6x.gif',
      '6x': '/assets/images/happy@6x.gif'
    }
  },
  ABOUT: {
    id: 'about',
    href: '/about',
    title: 'About Me',
    description: 'Hey there! I\'m chronoDave, a 23-year old Dutch multimedia designer. I currently work as a front-end web developer and in my free time I enjoy writing software, creating games and pushing pixels.',
    images: {
      og: '/assets/images/happy@6x.gif',
      '6x': '/assets/images/happy@6x.gif'
    }
  },
  WORKS: {
    id: 'works',
    href: '/works',
    title: 'Works',
    description: 'An assorted collection of my projects and works.',
    images: {
      og: '/assets/images/tunh@2x.gif',
      '1x': '/assets/images/tunh.gif',
      '2x': '/assets/images/tunh@2x.gif'
    }
  },
  CONTACT: {
    id: 'contact',
    href: '/contact',
    title: 'Contact',
    description: 'You can find me and my works in these places.',
    images: {
      og: '/assets/images/happy@6x.gif',
      '6x': '/assets/images/happy@6x.gif'
    }
  },
  TUHN: {
    id: 'tuhn',
    href: DYNAMIC_ROUTES.WORK('tuhn'),
    title: '東方運命の星 (Touhou Unmei no Hoshi)',
    description: '東方運命の星 (Touhou Star of Destiny) is a Touhou fangame made with the PICO-8 fantasy console, where you shoot bullets at the enemy whilst avoiding getting shot yourself.',
    images: {
      og: '/assets/images/tunh@2x.gif',
      '1x': '/assets/images/tunh.gif',
      '2x': '/assets/images/tunh@2x.gif'
    }
  },
  DOOMBOX: {
    id: 'doombox',
    href: DYNAMIC_ROUTES.WORK('doombox'),
    title: 'Doombox',
    description: 'Doombox is a music player designed and built to support a large, personal music collection. It\'s free, open source and high customizable.',
    images: {
      og: '/assets/images/doombox@2x.png',
      '1x': '/assets/images/doombox.png',
      '2x': '/assets/images/doombox@2x.png'
    }
  },
  THESIS: {
    id: 'thesis',
    href: DYNAMIC_ROUTES.WORK('thesis'),
    title: 'Meaningful Interaction in Narrative-Driven Games',
    description: 'Can games be developed in such a way that the story within the game makes optimal usage of the inherent interactivity of the medium?',
    images: {
      og: '/assets/images/thesis@2x.png',
      '1x': '/assets/images/thesis.png',
      '2x': '/assets/images/thesis@2x.png'
    }
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
