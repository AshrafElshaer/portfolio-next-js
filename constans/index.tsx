import {
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiRedux,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { ReactNode } from "react";

function createIcon(icon: string, size: string): ReactNode {
  switch (icon) {
    case "typescript":
      return <SiTypescript size={size} color='#007acc' />;
      break;
    case "react":
      return <FaReact color='#61dbfb' size={size} />;
      break;
    case "redux":
      return <SiRedux color='#764abc' size={size} />;
      break;
    case "tailwind":
      return <SiTailwindcss color='#3b82f6' size={size} />;
      break;
    case "node":
      return <SiNodedotjs color='#68A063' size={size} />;
      break;
    case "express":
      return <SiExpress size={size} />;
      break;
    case "mongoDB":
      return <SiMongodb color='#3FA037' size={size} />;
      break;
    case "github":
      return <AiFillGithub size={size} />;
      break;
    case "linkedIn":
      return <AiFillLinkedin color='white' size={size} />;
      break;
    case "instagram":
      return <AiOutlineInstagram color='white' size={size} />;
      break;

    default:
      return;
  }
}

const React = (size: string): ReactNode => (
  <FaReact color='#61dbfb' size={size} />
);

export const technologies = [
  {
    name: "TypeScript",
    icon: createIcon("typescript", "2rem"),
  },
  {
    icon: createIcon("react", "2rem"),
    name: "React Js",
  },
  {
    icon: createIcon("redux", "2rem"),
    name: "Redux",
  },
  {
    icon: createIcon("tailwind", "2rem"),
    name: "Tailwind ",
  },
  {
    icon: createIcon("node", "2rem"),
    name: "Node Js ",
  },
  {
    icon: createIcon("express", "2rem"),
    name: "Express Js ",
    color: "text-theme-light dark:text-theme-dark",
  },
  {
    icon: createIcon("mongoDB", "2rem"),
    name: "MongoDB ",
  },
  {
    icon: createIcon("github", "2rem"),
    name: "GitHub ",
    color: "text-theme-light dark:text-theme-dark",
  },
];

export const socialMediaLinks = {
  gitHub: {
    path: "https://github.com/AshrafElshaer",
    icon: createIcon("github", "5rem"),
  },
  linkedIn: {
    path: "https://www.linkedin.com/in/ashrafelshaer/",
    icon: createIcon("linkedIn", "5rem"),
  },
  instagram: {
    path: "https://www.instagram.com/ashraf.elsha3er/",
    icon: createIcon("instagram", "5rem"),
  },
};

export const projects = [
  {
    name: "AudioPhile",
    subTitle: "Web e-commerce ",
    techStack: [
      createIcon("react", "2rem"),
      createIcon("redux", "2rem"),
      createIcon("tailwind", "2rem"),
    ],
    gallery: [
    "/public/audiophile-1.png",
    // "/public/audiophile-2.png",
    // "/public/audiophile-3.png",
    // "/public/audiophile-4.png",
    // "/public/audiophile-5.png",
    // "/public/audiophile-6.png",
  ],
    livePath: "live preview link",
    githubPath: "github coe repo",
  },
];
