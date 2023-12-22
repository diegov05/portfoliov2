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
    usage: "Collaborative UI design tool for teams, allowing real-time cloud-based design and prototyping.",
    icon: <FigmaLogo className="max-md:w-6" />,
  },
  {
    name: "Git",
    usage: "Distributed version control system allowing efficient tracking of changes, collaboration among developers, and version management of code repositories.",
    icon: < GitLogo className="max-md:w-6" />,
  },
  {
    name: "GitHub",
    usage: "Web platform for collaborative coding, hosting, and managing projects using Git.",
    icon: <GitHubLogo className="max-md:w-6" />,
  },
  {
    name: "Supabase",
    usage: "Open-source platform using PostgreSQL for real-time databases and serverless functions, aiding efficient app development.",
    icon: <SupabaseLogo className="max-md:w-6" />,
  },
  {
    name: "Firebase",
    usage: "Google's all-in-one platform for mobile and web apps, covering hosting, authentication, databases, and analytics in the cloud.",
    icon: <FirebaseLogo className="max-md:w-6" />,
  },
  {
    name: "Vercel",
    usage: "Cloud platform for deploying web applications with seamless integration, offering scalability, performance, and developer-friendly workflows for deployment.",
    icon: < VercelLogo className="max-md:w-6" />,
  },
  {
    name: "AWS",
    usage: "Amazon's cloud platform offering a wide range of services for scalable app development and deployment.",
    icon: <AWSLogo className="max-md:w-6" />,
  },
  {
    name: "Netlify",
    usage: "Streamlined cloud platform for easy web development and hosting with global content delivery.",
    icon: <NetlifyLogo className="max-md:w-6" />,
  },
  {
    name: "Notion",
    usage: "Versatile workspace for collaborative note-taking and task management.",
    icon: < NotionLogo className="max-md:w-6" />,
  },
  {
    name: "Docker",
    usage: "Simplifies app development, shipping, and deployment using containers for consistent performance across environments.",
    icon: <DockerLogo className="max-md:w-6" />,
  },
]