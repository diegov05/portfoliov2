import { AWSLogo } from "../icons/aws-logo";
import { DockerLogo } from "../icons/docker-logo";
import { FigmaLogo } from "../icons/figma-logo";
import { FirebaseLogo } from "../icons/firebase-logo";
import { GitLogo } from "../icons/git-logo";
import { GitHubLogo } from "../icons/github-logo";
import { NetlifyLogo } from "../icons/netlify-logo";
import { NotionLogo } from "../icons/notion-logo";
import { SupabaseLogo } from "../icons/supabase-logo";
import { VercelLogo } from "../icons/vercel-logo";

export const tools = [
  {
    name: "Figma",
    usage: "Collaborative UI design tool for creating and prototyping interfaces.",
    icon: <FigmaLogo className="max-md:w-6" />,
  },
  {
    name: "Git",
    usage: "Distributed version control system for tracking code changes and collaboration.",
    icon: <GitLogo className="max-md:w-6" />,
  },
  {
    name: "GitHub",
    usage: "Web platform for collaborative coding, hosting, and managing projects using Git.",
    icon: <GitHubLogo className="max-md:w-6" />,
  },
  {
    name: "Supabase",
    usage: "Open-source backend platform with real-time databases and serverless functions.",
    icon: <SupabaseLogo className="max-md:w-6" />,
  },
  {
    name: "Firebase",
    usage: "Google platform for hosting, authentication, databases, and analytics in apps.",
    icon: <FirebaseLogo className="max-md:w-6" />,
  },
  {
    name: "Vercel",
    usage: "Cloud platform for deploying and scaling web applications with ease.",
    icon: <VercelLogo className="max-md:w-6" />,
  },
  {
    name: "AWS",
    usage: "Amazon's cloud platform offering services for scalable app development and hosting.",
    icon: <AWSLogo className="max-md:w-6" />,
  },
  {
    name: "Netlify",
    usage: "Cloud platform for simple web development, hosting, and global content delivery.",
    icon: <NetlifyLogo className="max-md:w-6" />,
  },
  {
    name: "Notion",
    usage: "Workspace app for collaborative note-taking, documentation, and task management.",
    icon: <NotionLogo className="max-md:w-6" />,
  },
  {
    name: "Docker",
    usage: "Tool for building, running, and deploying apps consistently using containers.",
    icon: <DockerLogo className="max-md:w-6" />,
  },
]
