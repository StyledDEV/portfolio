export const emailList = ['apbdev.contact@gmail.com']

export const siteName = 'Agustin Piriz'

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
    content: 'Conoceme mejor',
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
]

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
]

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
    name: 'Sistemas Linux',
    url: 'https://es.wikipedia.org/wiki/GNU/Linux',
  },
  {
    id: 10,
    name: 'Español',
  },
  {
    id: 11,
    name: 'Inglés',
  },
]

export const works = [
  {
    id: 0,
    name: 'TecnoSavio',
    description:
      'Landing page para negocio de reparación de electrodomésticos.',
    tools: [
      {
        id: 0,
        name: 'HTML',
      },
      {
        id: 1,
        name: 'CSS',
      },
      {
        id: 2,
        name: 'JavaScript',
      },
      {
        id: 3,
        name: 'Google Maps',
      },
      {
        id: 4,
        name: 'WhatsApp Web',
      },
      {
        id: 5,
        name: 'Figma',
      },
      {
        id: 6,
        name: 'Git',
      },
    ],
    url: {
      external: 'https://servicesavio.com',
    },
    img: {
      single: 'tecnosavio.png',
    },
    tasks: [
      {
        id: 0,
        name: 'Bocetaje',
        description:
          'Boceté la página teniendo en cuenta el contenido que iría en ella.',
      },
      {
        id: 1,
        name: 'Logotipo',
        description:
          'Hice el logotipo que llevaría la página con un nombre y un eslogan.',
      },
      {
        id: 2,
        name: 'Diseño',
        description:
          'Diseñé la página guiándome por el boceto que hice anteriormente y los colores que llevaría la misma.',
      },
      {
        id: 3,
        name: 'Estructura y estilos',
        description:
          'Creé la estructura del sitio según se mostraba en el diseño y le di la apariencia deseada en los diferentes tamaños de pantalla.',
      },
      {
        id: 4,
        name: 'Aprendizaje',
        description:
          'Aprendí a manejar colores de forma óptima en Figma y a declarar el contenido del sitio de una mejor manera, ',
      },
    ],
  },
  {
    id: 1,
    name: 'Juego de piedra papel o tijera',
    description:
      'Mini juego web de piedra, papel o tijera, con guardado local.',
    tools: [
      {
        id: 0,
        name: 'HTML',
      },
      {
        id: 1,
        name: 'CSS',
      },
      {
        id: 2,
        name: 'JavaScript',
      },
      {
        id: 3,
        name: 'Local Storage',
      },
      {
        id: 4,
        name: 'Git',
      },
    ],
    url: {
      external: 'https://styleddev.github.io/rock-paper-scissors-game',
      repository: 'https://github.com/styleddev/rock-paper-scissors-game',
    },
    img: {
      single: 'rock-paper-scissors-game.png',
    },
    tasks: [
      {
        id: 0,
        name: 'Estructura y estilos',
        description:
          'Creé la estructura de la aplicación y le di vida con los estilos CSS de acuerdo al diseño.',
      },
      {
        id: 1,
        name: 'Funcionalidad',
        description:
          'Hice una función que se encarga de recibir la elección del usuario y la compara con la elección de la CPU, teniendo en cuenta las reglas del juego.',
      },
      {
        id: 2,
        name: 'Puntuación',
        description:
          'La puntuación del juego es guardada en el navegador del usuario para que cuando regrese al sitio el puntaje siga ahí.',
      },
      {
        id: 3,
        name: 'Aprendizaje',
        description:
          'Aprendí a crear mi primer juego web pequeño que sirvió para animarme a crear cosas fuera de lo que acostumbro a hacer y para disfrutar del desarrollo con algo divertido de realizar.',
      },
    ],
  },
  {
    id: 2,
    name: 'DiscordVote',
    description: 'Plataforma para calificar servidores y bots de Discord.',
    tools: [
      {
        id: 0,
        name: 'React',
      },
      {
        id: 1,
        name: 'Styled Components / SCSS',
      },
      {
        id: 2,
        name: 'Git',
      },
      {
        id: 3,
        name: 'Inglés',
      },
    ],
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
    id: 3,
    name: 'Portafolio propio',
    tools: [
      {
        id: 0,
        name: 'React',
      },
      {
        id: 1,
        name: 'React Router',
      },
      {
        id: 2,
        name: 'hook useContext',
      },
      {
        id: 3,
        name: 'CSS',
      },
      {
        id: 4,
        name: 'Figma',
      },
    ],
    url: {
      external: 'https://agustin-piriz.com',
      repository: 'https://github.com/StyledDEV/portfolio',
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
  {
    id: 4,
    name: 'Grocery bud',
    description:
      'Página para gestionar alimentos de manera muy básica. Tiene guardado local.',
    tools: [
      {
        id: 0,
        name: 'React',
      },
      {
        id: 1,
        name: 'hook useReducer',
      },
      {
        id: 2,
        name: 'Local Storage',
      },
    ],
    url: {
      external: 'https://agustin-react-learning-grocery-bud.netlify.app',
      repository: 'https://github.com/StyledDEV/grocery-bud',
    },
    img: {
      single: 'grocery-bud.png',
    },
    tasks: [
      {
        id: 0,
        name: 'Creación de clases CSS para componentes principales',
        description:
          'Hice parte de los estilos que iban a utilizar los componentes principales de la app, para así guiarme de una mejor manera cuando haga la funcionalidad.',
      },
      {
        id: 1,
        name: 'Usé el hook reducer de React',
        description:
          'Gestioné el estado de la aplicación con useReducer, para así tener una mejor organización y que sea fácil manejar todos los cambios de estado.',
      },
      {
        id: 2,
        name: 'Hice el formulario para ingresar texto',
        description:
          'Creé el componente de formulario y le agregé los elementos, y manejé el texto de entrada con una función que es capaz de gestionar varios inputs a la vez, usando las propiedades name y value del input.',
      },
      {
        id: 3,
        name: 'Lista de elementos',
        description:
          'Agregué los componentes y las funciones encargadas de mostrar los elementos que contiene el estado.',
      },
      {
        id: 4,
        name: 'Hice la funcionalidad',
        description:
          'De esta manera conseguí cambiar los estados de la aplicación al añadir, editar o eliminar un elemento.',
      },
      {
        id: 5,
        name: 'Uso de la API localStorage',
        description:
          'Utilicé la API del navegador localStorage para guardar los elementos del estado en la memoria local.',
      },
      {
        id: 6,
        name: 'Aprendizaje',
        description:
          'En este mini proyecto aprendí a gestionar los estados de una aplicación de una mejor manera, también a cómo reemplazar el contenido de un elemento sin alterar el órden de la lista que lo contiene.',
      },
    ],
  },
  {
    id: 5,
    name: 'Componente de precios',
    description:
      'Reto de FrontendMentor creado según el diseño propuesto y con cambios al presionar un botón.',
    tools: [
      {
        id: 0,
        name: 'HTML',
      },
      {
        id: 1,
        name: 'CSS',
      },
      {
        id: 2,
        name: 'JavaScript',
      },
    ],
    url: {
      external: 'https://styleddev.github.io/challenges/pricing-component',
      repository:
        'https://github.com/StyledDEV/challenges/tree/main/pricing-component',
    },
    img: {
      single: 'pricing-component.png',
    },
  },
  {
    id: 6,
    name: 'Página de combos de un videojuego',
    description: 'Lista de combos de un personaje de un videojuego.',
    tools: [
      {
        id: 0,
        name: 'React',
      },
      {
        id: 1,
        name: 'React Router',
      },
      {
        id: 2,
        name: 'Lazy Load',
      },
      {
        id: 3,
        name: 'Custom hooks',
      },
      {
        id: 4,
        name: 'hook Context',
      },
      {
        id: 5,
        name: 'Styled Components',
      },
    ],
    url: {
      external: 'https://zed-combos.netlify.app',
      repository: 'https://github.com/StyledDEV/zed',
    },
    img: {
      single: 'zed-combos.png',
    },
  },
]
