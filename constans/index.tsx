import {
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiRedux,
  SiNextdotjs,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

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
