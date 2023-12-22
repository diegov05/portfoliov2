import "./styles/tech-stack-carousel.css"
import { techStack } from "./data/technicalStack"
import { tools } from "./data/tools"
import Link from "next/link";

export const TechStackCarousel = () => {

  const repetitions: Array<number> = Array(10);
  repetitions.fill(0)

  return (
    <section
      className="
        flex
        flex-col
        justify-center
        items-center
        min-[1025px]:max-[3000px]:flex-row
        min-[1025px]:max-[3000px]:justify-center
        min-[1025px]:max-[3000px]:items-center
        tech-gradient
    ">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="
          flex
          flex-col
          gap-8
          p-16
          lg:max-[3000px]:justify-start
          lg:max-[3000px]:items-start
          max-lg:justify-center
          max-lg:items-center
        "
      >
        <div className="
          flex 
          flex-col 
          gap-4
          lg:max-[3000px]:justify-start
          lg:max-[3000px]:items-start
          max-lg:justify-center
          max-lg:items-center
        ">
          <h1
            className="
              lg:max-[3000px]:w-[30vw]
              text-[#e9ecea]
              font-extrabold
              leading-normal
              text-[23px]
              sm:max-lg:text-[32px]
              lg:max-[3000px]:text-[45px]
              max-lg:text-center
              transition-all
          "
          >
            Blazingly Fast and
            Reliable Tech Stack
          </h1>
          <h2 className="
          text-[11px] 
          sm:max-lg:text-[16px] 
          lg:max-[3000px]:text-[23px] 
          font-medium 
          text-[#E1F8FF] 
          lg:max-[3000px]:text-start
          text-center
          opacity-70
          ">
            I love working with these technologies. <br /> Efficiency empowered, building with <br /> speed and stability
          </h2>
        </div>
        <Link
          className="
        border-b
        border-transparent
        hover:border-[#99e7ff]
        header-link
        text-[16px]
        lg:max-[3000px]:text-[23px]
        text-center
        font-medium"
          href={'/#projects'}
        >
          Check out the work I&apos;ve done
        </Link>
      </div>
      <div className="
        h-full
        flex
        flex-col
        min-[1025px]:max-[3000px]:flex-row
        gap-4
    ">
        <div className="carousel">
          <div className="carousel-track">
            {repetitions.map((index) => (
              <div key={index} className="flex flex-row min-[1025px]:max-[3000px]:flex-col gap-4">
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
                        lg:max-[3000px]:text-[23px] 
          ">
                        {tech.name}
                      </h3>
                    </div>
                    <p
                      className="
                      tech-usage
                      text-[8px] 
                      sm:max-lg:text-[11px] 
                      lg:max-[3000px]:text-[16px] 
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
              <div key={index} className="flex flex-row min-[1025px]:max-[3000px]:flex-col gap-4">
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
                          lg:max-[3000px]:text-[23px] 
        ">
                        {tool.name}
                      </h3>
                    </div>
                    <p
                      className="
                        tech-usage
                        text-[8px] 
                        sm:max-lg:text-[11px] 
                        lg:max-[3000px]:text-[16px] 
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
    </section >
  );
}

export default TechStackCarousel;