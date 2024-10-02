import { Badge } from "@/components/badge"
import { Title } from "@/components/title"
import phone from "@/assets/phone.png"
import Image from "next/image"

export const LearnMoreSection = () => {
  return (
    <section
      id="learn-more"
      className="
      p-8
      flex
      flex-col
      xl:flex-row
      justify-between
      items-start
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
        justify-start
        items-start
      ">
        <Badge content="About Me" />
        <Title
          className="
          w-[10ch] 
          text-start
          text-[23px]
          sm:max-lg:text-[32px]
          lg:text-[45px]
        ">
          Learn More About Me
        </Title>
        <p
          className="
          text-secondary
          text-[16px]
          lg:text-[32px]
          w-auto
          sm:w-[25ch]
          text-start
      ">
          Hey, I&apos;m Diego! 👋 I&apos;m a full-stack web developer with over 2 years of experience
          specialized in creating engaging, eye-catching and
          highly-performant web applications.
        </p>
      </div>
      <Image
        alt="learn-more-about-me"
        src={phone}
        className="
        w-[30rem]
        sm:max-lg:w-[30rem]
        lg:w-[40rem]
        h-auto
        "/>
    </section>
  )
}