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
    <section
      className="
        flex
        flex-col
        justify-center
        items-center
        tech-gradient
        gap-4
        p-4      
      ">
      <p
        className="
        text-sm
        sm:max-lg:text-lg
        lg:max-[3000px]:text-xl
        text-[#e9ecea]
        opacity-60
        max-md:w-[30ch]
        font-medium
        text-center
        "
      >
        Building with the latest and most reliable technologies in the front-end world
      </p>
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
        <NextLogo className="svg-size" />
        <ReactLogo className="svg-size" />
        <TailwindLogo className="svg-size" />
        <TypeScriptLogo className="svg-size" />
        <AstroLogo className="svg-size" />
        <SupabaseLogo className="svg-size" />
        <GitLogo className="svg-size" />
        <DockerLogo className="svg-size" />
      </div>
    </section>
  )
}