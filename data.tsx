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
  Smartphone,
  UserRound,
} from "lucide-react";

export const socialNetworks = [
  {
    id: 1,
    logo: <Linkedin size={30} strokeWidth={1} />,
    src: "https://www.linkedin.com/in/jonathan-morales-espinosa-295986296/",
  },
  {
    id: 2,
    logo: <Github size={30} strokeWidth={1} />,
    src: "https://github.com/0sayo0",
  },
  {
    id: 3,
    logo: <Instagram size={30} strokeWidth={1} />,
    src: "https://www.instagram.com/0sayo0",
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
    endCounter: 1,
    text: "year of experience",
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
    endCounter: 5,
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
    title: "Web Development",
    description:
      "Design and development of custom websites, adapted to your needs.",
  },
  {
    icon: <Network />,
    title: "REST API",
    description:
      "Development of an efficient system to manage your business or company.",
  },
  {
    icon: <Rocket />,
    title: "SEO",
    description:
      "Optimizing your online presence through advanced SEO strategies.",
  },
  {
    icon: <Wrench />,
    title: "Maintenance",
    description:
      "Correction, implementation and optimization of applications and websites.",
  },
  {
    icon: <Smartphone />,
    title: "Mobile apps",
    description:
      "Development of multiplatform mobile applications according to your needs and preferences.",
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "TeamTask Frontend",
    image: "/teamtask-logo.png",
    urlGithub: "https://github.com/0sayo0/TeamTask_Frontend",
    urlDemo: "https://team-task-frontend.vercel.app/auth/login",
  },
  {
    id: 2,
    title: "TeamTask Backend",
    image: "/teamtask-logo.png",
    urlGithub: "https://github.com/0sayo0/TeamTask_Backend",
    urlDemo: "https://team-task-frontend.vercel.app/auth/login",
  },
  // {
  //   id: 2,
  //   title: "Calliving Inmuebles",
  //   image: "/image-2.jpg",
  //   urlGithub: "#!",
  //   urlDemo: "#!",
  // },

  // {
  //   id: 3,
  //   title: "Kualli",
  //   image: "/image-3.jpg",
  //   urlGithub: "#!",
  //   urlDemo: "#!",
  // },
  {
    id: 3,
    title: "Expense Control",
    image: "/bills.png",
    urlGithub: "https://github.com/0sayo0/control_gastos_vite",
    urlDemo: "https://orderedmoney.netlify.app",
  },
  {
    id: 4,
    title: "Veterinary Patients",
    image: "/veterinary.png",
    urlGithub: "https://github.com/0sayo0/citas_react_vite",
    urlDemo: "https://dogtoranimalistic.netlify.app",
  },
  // {
  //   id: 4,
  //   title: "CryptoCotizador",
  //   image: "/image-6.jpg",
  //   urlGithub: "#!",
  //   urlDemo: "#!",
  // },

  // {
  //   id: 7,
  //   title: "Dark Web ",
  //   image: "/image-7.jpg",
  //   urlGithub: "#!",
  //   urlDemo: "#!",
  // },

  // {
  //   id: 8,
  //   title: "E-commerce web",
  //   image: "/image-8.jpg",
  //   urlGithub: "#!",
  //   urlDemo: "#!",
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
