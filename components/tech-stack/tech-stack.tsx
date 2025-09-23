import FadeContent from "../ui/fade-content"
import { AstroLogo } from "./logos/astro-logo"
import { DockerLogo } from "./logos/docker-logo"
import { GitLogo } from "./logos/git-logo"
import { NextLogo } from "./logos/next-logo"
import { ReactLogo } from "./logos/react-logo"
import { SupabaseLogo } from "./logos/supabase-logo"
import { TailwindLogo } from "./logos/tailwind-logo"
import { TypeScriptLogo } from "./logos/ts-logo"

export const HorizontalTechStack: React.FC = () => {
  return (
    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
      <section
        className="
        mt-12
        md:mt-0
        flex
        flex-col
        justify-center
        items-center
        tech-gradient
        gap-8
        p-4      
      ">
        <h2
          className="
        text-xl
        lg:text-2xl
        opacity-60
        font-normal
        text-center
        font-sans
        tracking-tighter
        "
        >
          Building with the latest and most reliable technologies in the front-end world
        </h2>
        <div
          className="
          flex
          flex-row
          flex-wrap
          justify-center
          items-center
          gap-4
          md:max-[3000px]:gap-8
          "
        >
          <NextLogo className="svg-size opacity-70" />
          <ReactLogo className="svg-size" />
          <TailwindLogo className="svg-size" />
          <TypeScriptLogo className="svg-size" />
          <AstroLogo className="svg-size" />
          <SupabaseLogo className="svg-size" />
          <GitLogo className="svg-size" />
          <DockerLogo className="svg-size" />
        </div>
      </section>
    </FadeContent>
  )
}