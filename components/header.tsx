import Link from "next/link"
import { Title } from "./title"

export const Header: React.FC = () => {
  return (
    <header
      data-aos="fade-up"
      data-aos-duration="2000"
      className="
      mt-36
      flex 
      flex-col 
      justify-center 
      items-center
      gap-10
      px-8
      ">
      <div
        className="
        header-bg-gradient 
        -z-10 
        absolute 
        h-[18rem]
        w-[18rem]
        sm:max-lg:h-[20rem]
        sm:max-lg:w-[20rem]
        lg:max-[3000px]:w-[30rem]
        lg:max-[3000px]:h-[30rem]
      " />
      <div
        className=" 
        flex 
        items-center 
        justify-center 
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
        <Title className="text-center">
          Engaging <br
            className="hidden min-[500px]:block"
          />
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
        text-center
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
        font-extrabold
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
        font-medium"
        href={'/#projects'}
      >
        Check out the work I&apos;ve done
      </Link>
    </header>
  )
}