import { FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPrisma } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiZod } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiJira } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiReacthookform } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

export const icons = {
  JavaScript: <IoLogoJavascript />,
  PostgreSQL: <BiLogoPostgresql />,
  Prisma: <SiPrisma />,
  ShaddcnUI: <SiShadcnui />,
  TailwindCss: <RiTailwindCssFill />,
  Zod: <SiZod />,
  Git: <FaGitAlt />,
  GitHub: <FaGithub />,
  Jira: <SiJira />,
  MySQL: <SiMysql />,
  React: <FaReact />,
  Node: <FaNodeJs />,
  Express: <SiExpress />,
  ReactHookForm: <SiReacthookform />,
  Bootstrap: <FaBootstrap />,
  Laravel: <FaLaravel />,
  PHP: <FaPhp />,
  Next: <RiNextjsFill />,
};

export const experiences = [
  {
    title: "+IDEAS",
    position: "Full Stack Developer – Professional Intership",
    description:
      "Designed and developed a web application for internal process management. Implemented secure authentication and role management using NextAuth. Worked with PostgreSQL and Prisma ORM; deployed the app using Vercel. Implemented technologies: Next.js, Shadcn UI, TailwindCSS, Zod. Applied version control and project management using Git, GitHub, and Jira. Followed Agile methodologies such as Scrum for team collaboration. Integrated third-party services like UploadThing for image handling ",
    date: "Jalisco, México  January – June 2025  ",
    technologies: [
      "JavaScript",
      "PostgreSQL",
      "Prisma",
      "ShaddcnUI",
      "TailwindCss",
      "Zod",
      "Git",
      "GitHub",
      "Jira",
      "ReactHookForm",
      "Next",
    ],
    images: [
      "/ideas1.png",
      "/ideas2.png",
      "/ideas3.png",
      "/ideas4.png",
      "/ideas5.png",
    ],
  },

  {
    title: "GYM",
    position: "Full Stack Developer – Academic Project",
    description:
      "Developed a subscription payment platform for a gym. Implemented JWT-based authentication. Integrated payment gateway using Mercado Pago. Used React.js for the frontend and Node.js with Express for the backend. Database: MySQL.",

    date: "Jalisco, México  January – June 2025  ",
    technologies: [
      "JavaScript",
      "MySQL",
      "React",
      "Node",
      "Express",
      "Bootstrap",
    ],
    images: ["/gym1.png", "/gym2.png", "/gym3.png", "/gym4.png", "/gym5.png"],
  },
  {
    title: "Web Application Project",
    position: "Web Developer – Academic Project",
    description:
      "Built a web application using React and Bootstrap for the frontend. Backend developed with Laravel and PHP, consuming external APIs. Implemented pagination to enhance navigation and user experience. Used Bootstrap to create a responsive web interface.",
    date: "Jalisco, México  August – December 2024   ",
    technologies: ["Laravel", "PHP", "Bootstrap", "JavaScript", "React"],
    images: ["rm1.jpeg", "rm2.jpeg", "rm3.jpeg", "rm4.jpeg"],
  },
];
