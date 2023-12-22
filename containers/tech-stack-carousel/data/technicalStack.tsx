import { AstroLogo } from "../icons/astro-logo";
import { ExpressLogo } from "../icons/express-logo";
import { NextLogo } from "../icons/next-logo";
import { NodeLogo } from "../icons/node-logo";
import { PostgreLogo } from "../icons/postgre-logo";
import { PrismaLogo } from "../icons/prisma-logo";
import { ReactLogo } from "../icons/react-logo";
import { TailwindLogo } from "../icons/tailwind-logo";
import { TypeScriptLogo } from "../icons/ts-logo";

export const techStack = [
  {
    name: "React",
    usage: `JavaScript library for creating reusable components and building dynamic user interfaces with efficiency.`,
    icon: <ReactLogo className="max-md:w-6" />,

  },
  {
    name: "Tailwindcss",
    usage: "Streamlined, customizable CSS framework with pre-defined utility classes for rapid web development.",
    icon: < TailwindLogo className="max-md:w-6" />,

  },
  {
    name: "Next.js",
    usage: "React framework offering server-side rendering, simplifying the creation of performant and SEO-friendly web applications.",
    icon: <NextLogo className="max-md:w-8" />,

  },
  {
    name: "TypeScript",
    usage: "Adds static typing to JavaScript for more robust code.",
    icon: <TypeScriptLogo className="max-md:w-7" />,

  },
  {
    name: "Express",
    usage: "Lightweight Node.js framework for building web servers and APIs with simple routing and middleware.",
    icon: <ExpressLogo className="max-md:w-7" />,

  },
  {
    name: "Node.js",
    usage: "JavaScript runtime for scalable server-side applications with high performance.",
    icon: <NodeLogo className="max-md:w-6" />,

  },
  {
    name: "PostgreSQL",
    usage: "Powerful open-source relational database for versatile applications, known for reliability and advanced features.",
    icon: <PostgreLogo className="max-md:w-7" />,

  },
  {
    name: "Prisma",
    usage: "Streamlined database toolkit for efficient, type-safe queries, boosting developer productivity.",
    icon: <PrismaLogo className="max-md:w-7" />,

  },
  {
    name: "Astro",
    usage: "High-performance site builder combining static and dynamic rendering for fast, SEO-friendly websites.",
    icon: <AstroLogo className="max-md:w-7" />,

  },
];
