import { Badge } from "@/components/badge";
import { Title } from "@/components/title";
import Image from "next/image";
import phone from "@/assets/phone2.png"

export const Footer = () => (
  <>
    <div
      data-aos="fade-up"
      className="
      flex 
      flex-col 
      gap-48
      justify-center
      items-center
      md:max-[3000px]:justify-start 
      md:max-[3000px]:items-start
      ">
      <div
        data-aos-duration="1000"
        className="
        flex
        flex-col
        gap-4
        justify-center
        items-center
        md:max-[3000px]:justify-start 
        md:max-[3000px]:items-start
      ">
        <Badge content="Contact Me" />
        <Title
          className="
          xl:max-[3000px]:text-start 
          text-center
          text-[23px]
          sm:max-lg:text-[32px]
          lg:max-[3000px]:text-[45px]
        ">
          Get In Touch
        </Title>
        <p
          className="
          text-secondary
          text-[16px]
          lg:max-[3000px]:text-[32px]
          sm:max-[3000px]:w-[35ch]
          w-auto
          md:max-[3000px]:text-start
          text-center
      ">
          Open for job opportunities, open-source collaboration and freelance requests.
        </p>
        <button
          type="button"
          className="
        w-max
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
        </button>
      </div>
      <div className="w-full flex items-center justify-center">
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
        <Image
          className="
        w-[20rem]
        md:max-lg:w-[25rem]
        lg:max-[3000px]:w-[40rem]
        h-auto
        "
          alt="phone"
          src={phone}
          width={944}
          height={1022}
        />
      </div>
    </div>
  </>
)