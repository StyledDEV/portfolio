const email = 'apbdev.contact@gmail.com';

export const links = [
  {
    id: 0,
    url: '/',
    content: 'Inicio',
    featured: false,
  },
  {
    id: 1,
    url: '/about',
    content: 'Conoceme',
    featured: false,
  },
  {
    id: 2,
    url: '/contact',
    content: 'Contacto',
    featured: false,
  },
  {
    id: 3,
    url: '/work',
    content: 'Ver trabajos',
    featured: true,
  },
];

export const icons = [
  {
    id: 0,
    img: 'linkedin.png',
    url: 'https://linkedin.com/in/FOW',
    name: 'LinkedIn',
    type: 'link',
  },
  {
    id: 1,
    img: 'github.png',
    url: 'https://github.com/StyledDEV',
    name: 'GitHub',
    type: 'link',
  },
  {
    id: 2,
    img: 'email.png',
    url: `${email}`,
    name: 'Correo',
    type: 'email',
  },
];

export const skills = [
  {
    id: 0,
    name: 'React',
    url: 'https://es.reactjs.org/',
  },
  {
    id: 1,
    name: 'JavaScript',
    url: 'https://developer.mozilla.org/es/docs/Web/JavaScript',
  },
  {
    id: 2,
    name: 'HTML',
    url: 'https://developer.mozilla.org/es/docs/Web/HTML',
  },
  {
    id: 3,
    name: 'CSS',
    url: 'https://developer.mozilla.org/es/docs/Web/CSS',
  },
  {
    id: 4,
    name: 'SASS',
    url: 'https://sass-lang.com/',
  },
  {
    id: 5,
    name: 'Git',
    url: 'https://git-scm.com/',
  },
  {
    id: 6,
    name: 'Figma',
    url: 'https://www.figma.com/',
  },
  {
    id: 7,
    name: 'SQL',
    url: 'https://es.wikipedia.org/wiki/SQL',
  },
  {
    id: 8,
    name: 'JSON',
    url: 'https://es.wikipedia.org/wiki/JSON',
  },
  {
    id: 9,
    name: 'Español',
  },
  {
    id: 10,
    name: 'Inglés',
  },
];

export const works = [
  {
    id: 0,
    preview: 'example.jpg',
    name: 'example one testing',
    url: {
      local: 'example-one-testing',
      external: 'https://example.com',
    },
    img: {
      single: 'example.png',
    },
    tasks: [
      {
        id: 0,
        name: 'tarea 1',
        img: 'example.png',
        description:
          'Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur',
      },
      {
        id: 1,
        name: 'tarea 2',
        description: 'Descripción de la tarea 2 del trabajo 1',
      },
    ],
  },
  {
    id: 1,
    preview: 'example.jpg',
    name: 'another example',
    url: {
      local: 'another-example',
      external: 'https://another-example.com',
    },
    img: {
      single: 'example.png',
    },
    tasks: [{ id: 0, name: 'tarea 1', img: 'example.png' }],
  },
];
