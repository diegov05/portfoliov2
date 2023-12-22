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
      data-aos="fade"
      data-aos-duration="1000"
      className="
        mt-12
        md:max-[3000px]:mt-0
        flex
        flex-col
        justify-center
        items-center
        tech-gradient
        gap-8
        p-4      
      ">
      <p
        className="
        text-[16px]
        lg:max-[3000px]:text-[23px]
        text-[#e9ecea]
        opacity-60
        w-[20ch]
        md:max-[3000px]:w-auto
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