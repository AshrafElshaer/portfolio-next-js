import {
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiRedux,
  SiFirebase,
  SiNextdotjs,
  SiPrisma,
  SiTrpc,
  SiSupabase,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { ReactNode } from "react";

type IconName =
  | "typescript"
  | "react"
  | "next"
  | "redux"
  | "tailwind"
  | "node"
  | "express"
  | "mongoDB"
  | "github"
  | "firebase"
  | "linkedIn"
  | "instagram"
  | "prisma"
  | "trpc"
  | "supabase";

function createIcon(icon: IconName, size: string): JSX.Element {
  switch (icon) {
    case "typescript":
      return <SiTypescript size={size} color="#007acc" />;
      break;
    case "react":
      return <FaReact color="#61dbfb" size={size} />;
      break;
    case "next":
      return <SiNextdotjs size={size} />;
      break;
    case "redux":
      return <SiRedux color="#764abc" size={size} />;
      break;
    case "tailwind":
      return <SiTailwindcss color="#3b82f6" size={size} />;
      break;
    case "node":
      return <SiNodedotjs color="#68A063" size={size} />;
      break;
    case "express":
      return <SiExpress size={size} />;
      break;
    case "mongoDB":
      return <SiMongodb color="#3FA037" size={size} />;
      break;
    case "github":
      return <AiFillGithub size={size} />;
      break;
    case "firebase":
      return <SiFirebase color="#FFA611" size={size} />;
      break;
    case "linkedIn":
      return <AiFillLinkedin color="white" size={size} />;
      break;
    case "instagram":
      return <AiOutlineInstagram color="white" size={size} />;
      break;
    case "trpc":
      return <SiTrpc color="#0ea5e9" size={size} />;
      break;
    case "prisma":
      return <SiPrisma  size={size} />;
      break;
    case "supabase":
      return <SiSupabase color="#059669" size={size} />;
      break;

  
  }
}

const React = (size: string): ReactNode => (
  <FaReact color="#61dbfb" size={size} />
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
    icon: createIcon("next", "2rem"),
    name: "Next Js",
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
    subTitle: "Audio Hardware E-commerce ",
    description: [
      "View the optimal layout for the app depending on their device's screen size",
      "Create , Update user preferences & rders",
      "Adding , Upadting & Deleting products from cart",
      "Product description, features & gallery",
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
    name: "Invoice X",
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
  {
    id: 3,
    name: "Chat & Chill",
    subTitle: "Live Web Chat Application ",
    description: [
      "A live chat web app that allows users to chat with each other in real-time",
      "Full authantication through Next-Auth authantication",
      "Users can send images or files in the chat",
      "Users can see who is online",
      "User can add or delete a chat room or friend",
    ],
    techStack: [
      createIcon("next", "1.5rem"),
      createIcon("trpc", "1.5rem"),
      createIcon("prisma", "1.5rem"),
      createIcon("supabase", "1.5rem"),
    ],
    gallery: ["/chat-1.png", "/chat-2.png", "/chat-3.png"],
    livePath: "https://chat-and-chill.vercel.app/",
    githubPath: "https://github.com/AshrafElshaer/chat-and-chill",
  },
];
