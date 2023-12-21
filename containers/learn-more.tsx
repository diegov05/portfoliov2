import { Badge } from "@/components/badge"
import { Title } from "@/components/title"
import phone from "@/assets/phone.png"
import Image from "next/image"

export const LearnMoreSection = () => {
  return (
    <section
      className="
      p-8
      flex
      flex-col
      xl:max-[3000px]:flex-row
      justify-between
      items-center
      xl:max-[3000px]:items-start
      overflow-hidden
      gap-16
      ">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="
        flex
        flex-col
        gap-4
        justify-center
        items-center
        xl:max-[3000px]:justify-start 
        xl:max-[3000px]:items-start
      ">
        <Badge content="About Me" />
        <Title
          className="
          w-[10ch] 
          xl:max-[3000px]:text-start 
          text-center
          text-[23px]
          sm:max-lg:text-[32px]
          lg:max-[3000px]:text-[45px]
        ">
          Learn More About Me
        </Title>
        <p
          className="
          text-secondary
          text-[16px]
          lg:max-[3000px]:text-[32px]
          w-[25ch]
          xl:max-[3000px]:text-start
          text-center
      ">
          Experience Captivating UIs,
          Streamlined Monitoring:
          Let&apos;s Collaborate for
          Seamless Solutions.
        </p>
      </div>
      <Image
        alt="learn-more-about-me"
        src={phone}
        className="
        w-[30rem]
        sm:max-lg:w-[30rem]
        lg:max-[3000px]:w-[40rem]
        h-auto
        "/>
    </section>
  )
}