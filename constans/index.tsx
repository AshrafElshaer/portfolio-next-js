import {
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiRedux,
  SiFirebase,
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
    case "firebase":
      return <SiFirebase color='#FFA611' size={size} />;
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
    id: 1,
    name: "AudioPhile",
    subTitle: "E-commerce ",
    description: [
      "View the optimal layout for the app depending on their device's screen size",
      "Create & update User & Orders",
      "Adding , udpadting & Deleting products from cart",
      "Product description . features & gallery",
    ],
    techStack: [
      createIcon("typescript", "1.5rem"),
      createIcon("react", "1.5rem"),
      createIcon("tailwind", "1.5rem"),
      createIcon("node", "1.5rem"),
      createIcon("express", "1.5rem"),
      createIcon("mongoDB", "1.5rem"),
    ],
    gallery: [
      "/audiophile-1.png",
      "/audiophile-2.png",
      "/audiophile-3.png",
      "/audiophile-4.png",
      "/audiophile-5.png",
      "/audiophile-6.png",
    ],
    livePath: "https://radiant-marigold-3c2557.netlify.app/",
    githubPath: "https://github.com/AshrafElshaer/e-commerce-client",
  },
  {
    id: 2,
    name: "Invoce App",
    subTitle: "Invoicing web app ",
    description: [
      "Create, read, update, and delete invoices",
      "Save draft invoices, and mark pending invoices as paid",
      "Filter invoices by status (draft/pending/paid)",
      "Full authantication through firebase authantication",
    ],
    techStack: [
      createIcon("react", "1.5rem"),
      createIcon("redux", "1.5rem"),
      createIcon("firebase", "1.5rem"),
    ],
    gallery: [
      "/invoice-1.png",
      "/invoice-2.png",
      "/invoice-3.png",
      "/invoice-4.png",
      "/invoice-5.png",
    ],
    livePath: "https://curious-meringue-78ffd1.netlify.app/",
    githubPath: "https://github.com/AshrafElshaer/invoice-app-redux",
  },

];
