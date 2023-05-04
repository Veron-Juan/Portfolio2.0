type Stack = {
    name: string;
    color: string;
  }

export interface Project {
    id: number;
    name: string;
    stack: Stack[];
    description: string;
    img: string;
    url: string;
    code: string;
    progress: boolean;
    date: string;
  }

export const projects: Project[] = [
  {
    id: 1,
    name: 'Lofi music (In progress...)',
    stack: [
      {
        name: 'React.js',
        color: 'dark:border-sky-500/40'
      },
      {
        name: 'Redux',
        color: 'dark:border-teal-200/40'
      },
      {
        name: 'TypeScript',
        color: 'dark:border-green-500/40'
      },
      {
        name: 'Mongodb',
        color: 'dark:border-sky-400/40'
      }
    ],
    description:
      'Personal project still under construction, in which a community of people can be created to share their lofi music playlists for studying or relaxing. You can find a wide variety of lofi music, share your favorite songs with other users and discover new artists and songs in the community.',
    img: '/lofimusic.png',
    url: '#',
    code: "#",
    progress: false,
    date: 'During 2022'
  },
  {
    id: 2,
    name: '+Cotas App',
    stack: [
      {
        name: 'React.js',
        color: 'dark:border-sky-500/40'
      },
      {
        name: 'React Router',
        color: 'dark:border-red-600/30'
      },
      {
        name: 'Tailwind',
        color: 'dark:border-rose-500/30'
      },
      {
        name: 'Mongodb',
        color: 'dark:border-yellow-400/30'
      },
      
    ],
    description:
      'I worked on a web application as part of a 6-member team with the goal of finding and publishing lost pets in Resistencia and Corrientes. The application contains detailed information about the lost pet, including the possible exact location where it was last seen or where it was found through the Google Maps API.',
      img: '/mascotas.jpg',
      url: 'https://mas-cotas.vercel.app/',
      code: "https://github.com/Veron-Juan/Devlights-final-project",
    progress: false,
    date: 'Since January 2023'
  },
  {
    id: 3,
    name: 'Rick and Morty page',
    stack: [
      {
        name: 'React.js',
        color: 'dark:border-zinc-50/40'
      },
      {
        name: 'Redux',
        color: 'dark:border-blue-500/40'
      },
      {
        name: 'OpenAI API',
        color: 'dark:border-emerald-400/40'
      },
      {
        name: 'ChakraUI',
        color: 'dark:border-teal-300/40'
      }
    ],
    description:
      'The page through the external service of an API shows us the characters and episodes of the series, you can save the characters you like in favorites, delete them, search for characters by filtering, see details of each character and information of each chapter.',
      img: '/rickandmortyproject.png',
      url: 'https://rickandmortypage.vercel.app/',
      code: "https://github.com/Veron-Juan/rickandmorty-page",
    progress: false,
    date: 'Since February 2023'
  },
  {
    id: 4,
    name: 'Food App ',
    stack: [
      {
        name: 'React.js',
        color: 'dark:border-zinc-50/40'
      },
      {
        name: 'ContextAPI',
        color: 'dark:border-blue-500/40'
      },
      {
        name: 'Styled Components',
        color: 'dark:border-sky-400/40'
      },
      
    ],
    description:
      'This app allows you to create a list of videos using the ID provided by YT and store them in the LocalStorage. It also allows you to open a modal and preview the selected video. Developed with Next13, TypeScript and Tailwind. ',
      img: '/food_app.png',
      url: 'https://food-app-ebon-five.vercel.app/',
      code: "https://github.com/Veron-Juan/food-app",
    progress: false,
    date: 'February 2023'
  },
  {
    id: 5,
    name: 'Movies API',
    stack: [
      {
        name: 'HTML',
        color: 'dark:border-zinc-50/40'
      },
      {
        name: 'CSS',
        color: 'dark:border-blue-500/40'
      },
      {
        name: 'Javascript',
        color: 'dark:border-sky-400/40'
      },
      
    ],
    description:
      "Project of a movie page, it's made with vanilla javascript and css, you can save the movies you like in favorites, search movies, see details and more things.",
      img: '/movie_api.png',
      url: 'https://veron-juan.github.io/Movies-API/',
      code: "https://github.com/Veron-Juan/food-app",
    progress: false,
    date: 'February 2023'
  },
  {
    id: 6,
    name: 'Music player template',
    stack: [
      {
        name: 'React.js',
        color: 'dark:border-zinc-50/40'
      },
      {
        name: 'HTML',
        color: 'dark:border-zinc-50/40'
      },
      {
        name: 'CSS',
        color: 'dark:border-blue-500/40'
      },
      {
        name: 'Javascript',
        color: 'dark:border-sky-400/40'
      },
    ],
    description:
      "Project of a movie page, it's made with vanilla javascript and css, you can save the movies you like in favorites, search movies, see details and more things.",
      img: '/forever.jpg',
      url: 'https://rep-template-music.vercel.app/',
      code: "https://github.com/Veron-Juan/rep-music-react",
    progress: false,
    date: 'February 2023'
  },
  {
    id: 10,
    name: 'Randoms dogs',
    stack: [
      {
        name: 'React.js',
        color: 'dark:border-zinc-50/40'
      },
      {
        name: 'HTML',
        color: 'dark:border-zinc-50/40'
      },
      {
        name: 'CSS',
        color: 'dark:border-blue-500/40'
      },
      {
        name: 'Javascript',
        color: 'dark:border-sky-400/40'
      },
    ],
    description:
      "you get random pictures of dogs, save them in favorites, delete them and upload a picture of your dog to save it.",
      img: '/dogs.random.jpg',
      url: 'https://veron-juan.github.io/Random-Dogs/',
      code: "https://github.com/Veron-Juan/Random-Dogs",
    progress: false,
    date: 'February 2023'
  },
  {
    id: 7,
    name: 'Score rabbit',
    stack: [
      {
        name: 'HTML',
        color: 'dark:border-zinc-50/40'
      },
      {
        name: 'CSS',
        color: 'dark:border-blue-500/40'
      },
      
    ],
    description:
      "Project of a movie page, it's made with vanilla javascript and css, you can save the movies you like in favorites, search movies, see details and more things.",
      img: '/score_rabitt.jpg',
      url: 'https://veron-juan.github.io/Score-Rabbits/',
    progress: false,
    code: "https://github.com/Veron-Juan/Score-Rabbits",
    date: 'February 2023'
  },
  
  
]