import medixAI from "../assets/images/medixAI.png";
import portfolio from "../assets/images/portfolio.png";
import ecommerce from "../assets/images/ecommerce.png";

const projects = [
  {
    id: 1,
    title: "MedIXAI",
    description:
      "A modern healthcare appointment platform with authentication, appointment booking, doctor dashoboard and responsive UI",
    img: medixAI,
    tech: ['React', 'Next.js', 'Tailwind Css', 'MongoDB'],
    github: "https://github.com/bilal-ahmad-kr/medixAI.git",
  },
  {
  id: 2,
  title: "Portfolio Website",
  img: ecommerce,

    description:
      "Personal portfolio showcasing projects, skills, certifications, and contact information.",
    tech: ["React", "CSS", 'Framer-Motion'],
    github: "https://github.com/bilal-ahmad-kr/bilal-portfolio.git",
  },
  {
    id: 3,
    title: "E-Commerce Store",
    description:
      "Responsive online store with shopping cart, product search, and checkout interface.",
    img: portfolio,
    tech: ["React", "Redux", "Tailwind Css", 'Node.js', 'Typescript', 'Express.js', 'MongoDB'],
    github: "https://github.com/bilal-ahmad-kr/nexasphere.git",
  },
];

export default projects
