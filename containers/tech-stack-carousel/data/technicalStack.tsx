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
    usage: "JavaScript library for building reusable UI components efficiently.",
    icon: <ReactLogo className="max-md:w-6" />,
  },
  {
    name: "Tailwindcss",
    usage: "Utility-first CSS framework for fast, customizable styling.",
    icon: <TailwindLogo className="max-md:w-6" />,
  },
  {
    name: "Next.js",
    usage: "React framework with server-side rendering for SEO-friendly apps.",
    icon: <NextLogo className="max-md:w-6 mr-2" />,
  },
  {
    name: "TypeScript",
    usage: "Superset of JavaScript adding static typing and tooling.",
    icon: <TypeScriptLogo className="max-md:w-7" />,
  },
  {
    name: "Express",
    usage: "Minimal Node.js framework for APIs and web servers.",
    icon: <ExpressLogo className="max-md:w-7" />,
  },
  {
    name: "Node.js",
    usage: "JavaScript runtime for scalable, high-performance servers.",
    icon: <NodeLogo className="max-md:w-6" />,
  },
  {
    name: "PostgreSQL",
    usage: "Reliable open-source relational database with rich features.",
    icon: <PostgreLogo className="max-md:w-7" />,
  },
  {
    name: "Prisma",
    usage: "Database toolkit for type-safe queries and productivity.",
    icon: <PrismaLogo className="max-md:w-7" />,
  },
  {
    name: "Astro",
    usage: "Site builder for fast, SEO-friendly static and dynamic pages.",
    icon: <AstroLogo className="max-md:w-7" />,
  },
];
