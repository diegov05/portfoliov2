import Link from "next/link"
import { Title } from "./title"
import Image from "next/image"
import hero from "@/assets/Designer.png"

export const Header: React.FC = () => {
  return (
    <div
      className="
      flex
      flex-row
      items-center
      justify-between
      mb-36
      "
    >
      <header
        data-aos="fade-up"
        data-aos-duration="2000"
        className="
        mt-36
        flex 
        flex-col 
        justify-start 
        items-start
        gap-10
        px-8
      ">
        <div
          className=" 
          flex 
          items-start 
          justify-start 
          flex-col 
          gap-2
      ">
          <p
            className="
            header-slogan 
            text-[16px]
            lg:max-[3000px]:text-[23px]
          ">
            DESIGN . CODE . DEPLOY
          </p>
          <Title className="text-start">
            Engaging&nbsp;
            <span className="title-gradient">
              Web Experiences.
            </span>
          </Title>
        </div>
        <h2
          className="
        text-secondary
        text-[16px]
        lg:max-[3000px]:text-[23px]
        text-start
        ">
          Revealing Code Insights, Debugging Glitches,
          <br
            className="hidden min-[500px]:block"
          />
          and Ensuring Seamless Functionality.
        </h2>
        <Link
          href={"mailto:diegovs_@outlook.com"}
          target="_a"
          className="
        header-button 
        text-[16px]
        lg:max-[3000px]:text-[23px]
        py-2
        px-12 
        cursor-pointer 
        rounded-full 
        font-[500]
        ">
          Contact Me
        </Link>
        <Link
          className="
        border-b
        border-transparent
        hover:border-[#99e7ff]
        header-link
        text-[16px]
        lg:max-[3000px]:text-[23px]
        text-center
        font-[400]
        "
          href={'/#projects'}
        >
          Check out the work I&apos;ve done
        </Link>
      </header>
      <Image
        className="
        absolute 
        -z-20 
        w-screen 
        opacity-25
        lg:max-[3000px]:opacity-100
        lg:max-[3000px]:h-max
        lg:max-[3000px]:static
      "
        src={hero}
        alt="hero-image" />
    </div>
  )
}