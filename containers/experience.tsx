import { Badge } from "@/components/badge"
import { Slider } from "@/components/slider/slider"
import { Title } from "@/components/title"

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      data-aos="fade-up"
      data-aos-duration="1000"
      className="
      p-8
      flex
      flex-col
      justify-between
      items-center
      md:max-[3000px]:items-start
      gap-12
      overflow-hidden
      ">
      <div
        className="
        flex
        flex-col
        gap-4
        justify-center
        items-center
        md:max-[3000px]:justify-start 
        md:max-[3000px]:items-start
        
        ">
        <Badge content="Work Experience" />
        <Title
          className="
          md:max-[3000px]:text-start 
          text-center
          text-[23px]
          sm:max-lg:text-[32px]
          lg:max-[3000px]:text-[45px]
        ">
          Valuable Experience
        </Title>
      </div>
      <Slider />
    </section>
  )
}