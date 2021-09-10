export const emailList = ['apbdev.contact@gmail.com', 'alwl1@hotmail.com'];

export const siteName = 'Agustin Piriz';

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
    url: `${emailList[0]}`,
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
    name: 'DiscordVote',
    url: {
      external: 'https://discordvote.net',
    },
    img: {
      single: 'discordvote.png',
    },
    tasks: [
      {
        id: 0,
        name: 'Solucionar problemas de estilos',
        description:
          'Aprendí las bases de StyledComponents y optimicé varios trozos de código CSS en los componentes de React, para que no se repitiera tanto código.',
      },
      {
        id: 1,
        name: 'Aprender Git',
        description:
          'Estudié Git para poder manejarme con los comandos en la terminal y así poder colaborar de mejor manera con el proyecto, ya que habíamos empezado colaborando con un plugin de Visual Studio Code.',
      },
      {
        id: 2,
        name: 'Adaptar diseños a código',
        description:
          'Con los diseños que me enviaba la persona con la que colaboraba, realicé diferentes partes de la aplicación, como la página de información y gestión de los bots o servidores, incluyendo un menú lateral.',
      },
      {
        id: 3,
        name: 'Mejoras del código en general',
        description:
          'Hice parte de la adaptación a móviles, algunas mejoras en la organización de los Styled Components, al igual que correcciones en sectores de la aplicación como el perfil del usuario y el campo de búsqueda.',
      },
      {
        id: 4,
        name: 'Aprendizaje',
        description:
          'Gracias a la comunicación que tuve con quien colaboré, pude mejorar algunas cosas de mi inglés al igual que mis conocimientos técnicos, y a cambio le ayudé a entender algunos conceptos de CSS',
      },
    ],
  },
  {
    id: 1,
    name: 'Portafolio propio',
    url: {
      external: 'https://agustin-piriz.com/',
    },
    img: {
      single: 'own-portfolio.png',
    },
    tasks: [
      {
        id: 0,
        name: 'Buscar diseños en Dribbble',
        description:
          'Me metí a ver diseños en Dribbble con tal de obtener inspiración para el diseño de la página.',
      },
      {
        id: 1,
        name: 'Bocetaje',
        description:
          'Luego de ver algunos diseños, empecé a dibujar bocetos para saber cómo sería el diseño final.',
      },
      {
        id: 2,
        name: 'Pensé los textos que pondría',
        description:
          'Usé algo de tiempo para pensar en el texto que iría en el sitio, intentando ser claro con las palabras para que se entienda lo que quiero comunicar.',
      },
      {
        id: 3,
        name: 'Diseño en Figma',
        description:
          'Con Figma hice las distintas partes del sitio basándome en los bocetos que había hecho anteriormente, y agregué algunos detalles al diseño final.',
      },
      {
        id: 4,
        name: 'Codificación',
        description:
          'Inicié con la creación de los componentes base del proyecto y al notar que el código se hacía menos legible y escalable, implementé el hook useContext de React, al igual que datos en formato JSON, y separé algo de código en variables para entenderlo con mayor facilidad.',
      },
      {
        id: 5,
        name: 'Aprendizaje',
        description:
          'Aprendí algunas cosas acerca del object destructuring en JavaScript, al igual que sobre el manejo de rutas en React, creación y uso de Custom Hooks, etc.',
      },
      {
        id: 6,
        name: 'Deployment',
        description:
          'Hice una carpeta lista para funcionar en un hosting y subí los archivos. Finalmente configuré las DNS para que se conecte todo al dominio y a la vez tener un certificado SSL.',
      },
    ],
  },
];
