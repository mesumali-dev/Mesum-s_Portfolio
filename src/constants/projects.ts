import { StaticImageData } from "next/image";
import project_2 from "@/assets/img/Project_2.png";
import project_3 from "@/assets/img/Project_3.png";
import flowdos from "@/assets/img/flowdos.png";

export interface Project {
  title: string;
  category: string;
  description: string;
  imageSrc: StaticImageData;
  link: string;
  techStack: string[];
  techIcons: { src: string; alt: string }[];
}

export const projects: Project[] = [
  {
    title: "AL Abbas Electric",
    category: "Industrial Business Platform",
    description: "A comprehensive digital ecosystem for industrial electrical and solar services, optimizing customer engagement and project management for large-scale operations.",
    imageSrc: project_2,
    link: "https://alabbaselectric.com",
    techStack: ["React.js", "Tailwind CSS", "JavaScript"],
    techIcons: [
      { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg", alt: "React.js" },
      { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg", alt: "JavaScript" },
      { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg", alt: "Tailwind CSS" },
    ],
  },
  {
    title: "Flowdos AI",
    category: "AI Agent & MCP Ecosystem",
    description: "An intelligent task management system powered by MCP (Model Context Protocol). It captures and organizes thoughts into actionable items using advanced AI reasoning.",
    imageSrc: flowdos,
    link: "http://flowdos.vercel.app/",
    techStack: ["Next.js", "Python", "FastAPI", "OpenAI SDK", "MCP Server"],
    techIcons: [
      { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg", alt: "Next.js" },
      { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", alt: "Python" },
      { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg", alt: "FastAPI" },
    ],
  },
  {
    title: "Capital Institute",
    category: "Enterprise Web Systems",
    description: "Developing a robust institutional ecosystem to digitize educational workflows and enhance student engagement pipelines.",
    imageSrc: project_3,
    link: "https://mesumaliofficial.github.io/capital-institute/",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    techIcons: [
      { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg", alt: "Next.js" },
      { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg", alt: "TypeScript" },
      { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg", alt: "Tailwind CSS" },
    ],
  },
];
