import "./styles/tech-stack-carousel.css"
import { techStack } from "./data/technicalStack"
import { tools } from "./data/tools"
import Link from "next/link";
import { Title } from "@/components/title";
import { Button } from "@/components/ui/button";
import { Codesandbox, GitCommitHorizontal } from "lucide-react";

export const TechStackCarousel = () => {

  const repetitions: Array<number> = Array(10);
  repetitions.fill(0)

  return (
    <section
      className="
        tech-gradient
        mx-auto
        bg-[#050505]
        pb-32
    ">
      <div className="md:w-max mx-auto flex flex-col min-[1025px]:flex-row gap-0 2xl:gap-36">
        <div
          className="
          flex
          flex-col
          gap-8
          py-16
          px-8
          2xl:p-16
        "
        >
          <div className="
          flex 
          flex-col 
          gap-4
        ">
            <Title
              className="
            font-sans tracking-tighter
            !text-2xl
            sm:!text-3xl
            lg:!text-5xl
            max-w-md
            text-green-50
          "
            >
              Blazingly Fast and
              Reliable Tech Stack
            </Title>
            <p className="
          text-sm 
          sm:text-base 
          lg:text-lg
          font-normal 
          text-green-50
          opacity-70
          font-sans
          ">
              I love working with these technologies. <br /> Efficiency empowered, building with <br /> speed and stability
            </p>
          </div>
          <Button size={'default'} asChild variant="default" className="text-base w-max font-sans text-green-50">
            <Link href="#projects">
              Check out my work
              <GitCommitHorizontal className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="
        h-full
        flex
        flex-col
        min-[1025px]:flex-row
        gap-4
    ">
          <div className="carousel">
            <div className="carousel-track">
              {repetitions.map((index) => (
                <div key={index} className="flex flex-row min-[1025px]:flex-col gap-4">
                  {techStack.map((tech) => (
                    <div className="carousel-item min-w-[max-content]" key={tech.name}>
                      <div
                        className="
                        flex
                        flex-row
                        justify-start
                        items-center
                        gap-2
                        w-[max-content]
                  ">
                        {tech.icon}
                        <h3
                          className="
                        tech-title 
                        text-[11px] 
                        sm:max-lg:text-[16px] 
                        lg:text-[23px] 
          ">
                          {tech.name}
                        </h3>
                      </div>
                      <p
                        className="
                      tech-usage
                      text-[8px] 
                      sm:max-lg:text-[11px] 
                      lg:text-[16px]
                      text-balance
                ">
                        {tech.usage}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="carousel">
            <div className="downwards-carousel-track">
              {repetitions.map((index) => (
                <div key={index} className="flex flex-row min-[1025px]:flex-col gap-4">
                  {tools.map((tool) => (
                    <div className="carousel-item min-w-[max-content]" key={tool.name}>
                      <div
                        className="
                        flex
                        flex-row
                        justify-start
                        items-center
                        gap-2
                        w-[max-content]
                ">
                        {tool.icon}
                        <h3
                          className="
                          tech-title 
                          text-[11px] 
                          sm:max-lg:text-[16px] 
                          lg:text-[23px] 
        ">
                          {tool.name}
                        </h3>
                      </div>
                      <p
                        className="
                        tech-usage
                        text-[8px] 
                        sm:max-lg:text-[11px] 
                        lg:text-[16px] 
              ">
                        {tool.usage}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}

export default TechStackCarousel;