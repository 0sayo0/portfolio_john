import {
  BookText,
  CodeSquare,
  Linkedin,
  Twitter,
  Computer,
  Rocket,
  Github,
  Instagram,
  Contact,
  Network,
  Wrench,
  UserRound,
  LineChart,
} from "lucide-react";

export const socialNetworks = [
  {
    id: 1,
    logo: <Linkedin size={30} strokeWidth={1} />,
    src: "https://www.linkedin.com/in/jonathan-morales-dev",
  },
  {
    id: 2,
    logo: <Github size={30} strokeWidth={1} />,
    src: "https://github.com/0sayo0",
  },
  {
    id: 3,
    logo: <Instagram size={30} strokeWidth={1} />,
    src: "https://www.instagram.com/sayo.hn",
  },
  {
    id: 4,
    logo: <Twitter size={30} strokeWidth={1} />,
    src: "https://x.com/jonathansme01",
  },
  // {
  //   id: 5,
  //   logo: <Youtube size={30} strokeWidth={1} />,
  //   src: "#!",
  // },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Me",
    icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
    link: "/",
  },
  // {
  //   id: 2,
  //   title: "Me",
  //   icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
  //   link: "/about-me",
  // },
  {
    id: 3,
    title: "Services",
    icon: <BookText size={25} color="#fff" strokeWidth={1} />,
    link: "/services",
  },
  {
    id: 4,
    title: "Projects",
    icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
    link: "/portfolio",
  },
  {
    id: 5,
    title: "Contact",
    icon: <Contact size={25} color="#fff" strokeWidth={1} />,
    link: "/contact",
  },
];

export const dataAboutPage = [
  {
    id: 1,
    title: "Frontend Developer",
    subtitle: "TechSolutions",
    description:
      "Colabora con un equipo dinámico para desarrollar interfaces de usuario atractivas y funcionales que impulsen el éxito de nuestros clientes en el mundo digital.",
    date: "Nov 2023 ",
  },
  {
    id: 2,
    title: "Creador de Experiencias Digitales",
    subtitle: "PixelCrafters",
    description:
      "Trabaja en proyectos emocionantes que desafían los límites de la creatividad y la tecnología. Únete a nosotros mientras creamos experiencias digitales cautivadoras que inspiran y cautivan a nuestros usuarios.",
    date: "May 2021",
  },
  {
    id: 3,
    title: "Especialista en Desarrollo Frontend",
    subtitle: "CodeForge Solutions",
    description:
      "Como desarrollador frontend, tendrás la oportunidad de colaborar en proyectos diversos y desafiantes que te permitirán expandir tus habilidades y dejar tu huella en el mundo digital.",
    date: "Ago 2019",
  },
  {
    id: 4,
    title: "Prácticas Grado",
    subtitle: "WebWizards Inc.",
    description:
      "Únete a nosotros mientras creamos sitios web y aplicaciones interactivas que sorprenden y deleitan a nuestros clientes. Si tienes pasión por el diseño y la programación, y disfrutas colaborar en un entorno creativo, ¡queremos conocerte!        ",
    date: "Mar 2018",
  },
];

export const dataCounter = [
  {
    id: 0,
    endCounter: 3,
    text: "years of experience",
    lineRight: true,
    lineRightMobile: true,
  },
  // {
  //   id: 1,
  //   endCounter: 3,
  //   text: "Clientes satisfechos",
  //   lineRight: true,
  //   lineRightMobile: false,
  // },
  {
    id: 2,
    endCounter: 10,
    text: "projects completed",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 3,
    endCounter: 5,
    text: "certifications",
    lineRight: false,
    lineRightMobile: false,
  },
];

export const serviceData = [
  {
    icon: <Computer />,
    title: "Frontend Architecture",
    description:
      "Building high-performance SPAs and web platforms using React, Next.js, and TypeScript.",
  },
  {
    icon: <Network />,
    title: "API Integration",
    description:
      "Integrating RESTful APIs and GraphQL services for reliable data fetching and state management.",
  },
  {
    icon: <Rocket />,
    title: "UI/UX & Mobile-First Design",
    description:
      "Converting designs into pixel-perfect, fully responsive web experiences for all screen sizes.",
  },
  {
    icon: <LineChart />,
    title: "Performance & SEO",
    description:
      "Optimizing Core Web Vitals, page speed, and SSR/SSG structure for maximum performance and visibility.",
  },
  {
    icon: <Wrench />,
    title: "Maintenance",
    description:
      "Correction, implementation and optimization of applications and websites.",
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "Stephany Manzano Home Collection",
    image: "/smhc.webp",
    urlGithub: "https://github.com/0sayo0/smhc-web",
    urlDemo: "https://stephanymanzano.com/",
  },
  {
    id: 2,
    title: "Abigail Larsson Fine Fashion",
    image: "/Abigail-Larsson.webp",
    urlGithub: "https://github.com/0sayo0/Abigail-larsson",
    urlDemo: "https://abigailarsson.netlify.app/",
  },
  {
    id: 3,
    title: "Kualli Agency",
    image: "/Kualli.webp",
    urlGithub: "https://github.com/0sayo0/kualli",
    urlDemo: "https://kualli.netlify.app",
  },
  {
    id: 4,
    title: "Veterinary Patients",
    image: "/vetericare.webp",
    urlGithub: "https://github.com/0sayo0/citas_react_vite",
    urlDemo: "https://dogtoranimalistic.netlify.app",
  },
  // {
  //   id: 5,
  //   title: "Expense Control",
  //   image: "/bills.webp",
  //   urlGithub: "https://github.com/0sayo0/control_gastos_vite",
  //   urlDemo: "https://orderedmoney.netlify.app",
  // },
  {
    id: 5,
    title: "TeamTask FullStack",
    image: "/teamtask-logo.png",
    urlGithub: "https://github.com/0sayo0/TeamTask_Frontend",
    urlDemo: "https://team-task-frontend.vercel.app/auth/login",
  },
  {
    id: 6,
    title: "Aeris Weather",
    image: "/aeris_weather.png",
    urlGithub: "https://github.com/0sayo0/Aeris",
    urlDemo: "https://aeris-rouge-eight.vercel.app/",
  },
  // {
  //   id: 7,
  //   title: "Calliving Inmuebles",
  //   image: "/calliving.png",
  //   urlGithub: "https://github.com/0sayo0/calliving_node_mvc",
  //   urlDemo: "https://calliving-node-mvc.onrender.com",
  // },
];

export const dataTestimonials = [
  {
    id: 1,
    name: "George Snow",
    description:
      "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
    imageUrl: "/profile1.png",
  },
  {
    id: 2,
    name: "Juan Pérez",
    description:
      "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
    imageUrl: "/profile2.png",
  },
  {
    id: 3,
    name: "María García",
    description:
      "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
    imageUrl: "/profile3.png",
  },
  {
    id: 4,
    name: "Laura Snow",
    description:
      "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
    imageUrl: "/profile4.png",
  },
  {
    id: 5,
    name: "Carlos Sánchez",
    description:
      "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
    imageUrl: "/profile5.png",
  },
  {
    id: 6,
    name: "Antonio Martínez",
    description:
      "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
    imageUrl: "/profile6.png",
  },
];
