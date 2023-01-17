import {
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiRedux,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";

export const technologies = [
  {
    name: "TypeScript",
    icon: (
      <SiTypescript
        size='2rem'
        color='
        #007acc'
      />
    ),
  },
  {
    icon: <FaReact color='#61dbfb' size='2rem' />,
    name: "React Js",
  },
  {
    icon: <SiRedux color='#764abc' size='2rem' />,
    name: "Redux",
  },
  {
    icon: <SiTailwindcss color='#3b82f6' size='2rem' />,
    name: "Tailwind ",
  },
  {
    icon: <SiNodedotjs size='2rem' color='#68A063' />,
    name: "Node Js ",
  },
  {
    icon: <SiExpress size='2rem' />,
    name: "Express Js ",
    color: "text-theme-light dark:text-theme-dark",
  },
  {
    icon: <SiMongodb size='2rem' color='#3FA037' />,
    name: "MongoDB ",
  },
  {
    icon: <AiFillGithub size='2rem' />,
    name: "GitHub ",
    color: "text-theme-light dark:text-theme-dark",
  },
];

export const socialMediaLinks = {
  gitHub: {
    path: "https://github.com/AshrafElshaer",
    icon: <AiFillGithub size='5rem' color='white' />,
  },
  linkedIn: {
    path: "https://www.linkedin.com/in/ashrafelshaer/",
    icon: <AiFillLinkedin size='5rem' color='white' />,
  },
  instagram: {
    path: "https://www.instagram.com/ashraf.elsha3er/",
    icon: <AiOutlineInstagram size='5rem' color='white' />,
  },
};
