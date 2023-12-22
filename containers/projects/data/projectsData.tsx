import { FilmasterImage } from "../images/filmaster";
import { SpotifyImage } from "../images/spotify";

export const projects = [
  {
    name: "Filmaster",
    badge: "IMDb Clone",
    description: `Upgraded version of Filmaster, a Responsive Modern UI/UX Movie Catalog Application using React, TypeScript, Tailwind, Firebase Hosting and Firestore Database.`,
    githubLink: "https://github.com/diegov05/filmasterV2",
    livePreview: "https://filmasterv2.web.app/",
    image: <FilmasterImage />,
  },
  {
    name: "Spotify Clone",
    badge: "Spotify Clone",
    description: `Spotify Clone using Next.js 13, TypeScript, Supabase, RadixUI, Tailwindcss and setting up test payments with Stripe. Deployed with Vercel.`,
    githubLink: "https://github.com/diegov05/spotify-clone",
    livePreview: "https://spotify-clone-black-five.vercel.app/",
    image: <SpotifyImage />,
  },
]