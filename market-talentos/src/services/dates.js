import { facebook, google } from "../firebase/firebaseConfig";

export const category = [
  {
    label: "Front end",
    value: 1,
  },
  {
    label: "Backend",
    value: 2,
  },
  {
    label: "Full stack",
    value: 3,
  },
];

export const loginProvider = [
  {
    name: "google",
    image: "https://assets.stickpng.com/images/5847f9cbcef1014c0b5e48c8.png",
    provider: google,
  },
  {
    name: "facebook",
    image:
      "https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-3-1.png",
    provider: facebook,
  },
];

export const collections = {
  administradores: "administradores",
  usuarios: "usuarios",
  talentos: "talentos",
  empresas: "empresas",
  ofertas: "ofertas",
  postulaciones: "postulaciones",
  talentStatus: "talentStatus",
  roles: "roles"
};

export const TiposDeUsuarios = {
  ADMIN: "administradores",
  TALENTO: "talentos",
  EMPRESA: "empresas",
};

export const typesUsers = [
  {id: 1,
  name: "administradores"
  }, 
  {id: 2,
    name: "empresas"
  },
  {id: 3,
      name: "talentos"
  },
]
 


export const roles = [
  {
    id: 1,
    name: "Front-end"
  },
  {
    id: 2,
    name: "Back-end"
  },
  {
    id: 3,
    name: "FullStack"
  },
  {
    id: 4,
    name: "UI/UX Designer"
  }
]

 export const languageOptions = [
  { id: "css", label: "CSS" },
    { id: "sass", label: "SASS" },
    { id: "react", label: "REACT" },
    { id: "javaScript", label: "JAVASCRIPT" },
    { id: "html", label: "HTML" },
    { id: "github", label: "GITHUB" },
    { id: "redux", label: "REDUX" },
    { id: "bootstrap", label: "BOOTSTRAP" },
    { id: "axios", label: "AXIOS" },
    { id: "Java", label: "JAVA" },
    { id: "Python.", label: "PYTHON." },
    { id: "php", label: "PHP" },
    { id: "ruby", label: "RUBY" },
    { id: "nodeJs", label: "NODEJS" },
    { id: "sql", label: "SQL" },
    { id: "StyledComponent", label: "STYLECOMPONENT" },
    { id: "material ui", label: "MATERIAL UI" },
    

];
