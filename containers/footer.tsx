import { Badge } from "@/components/badge";
import { Title } from "@/components/title";
import Image from "next/image";
import phone from "@/assets/phone2.png"
import Link from "next/link";

export const Footer = () => (
  <>
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="
      flex 
      flex-col 
      gap-48
      ">
      <div
        data-aos-duration="1000"
        className="
        flex
        flex-col
        gap-8
      ">
        <div className="
        flex 
        flex-col 
        gap-2 
        ">
          <Badge content="Contact Me" />
          <Title
            className="
          text-[23px]
          sm:max-lg:text-[32px]
          lg:text-[45px]
        ">
            Get In Touch
          </Title>
        </div>
        <p
          className="
          text-secondary
          text-[16px]
          lg:text-[32px]
          sm:w-[35ch]
          w-auto
      ">
          Open for job opportunities, open-source collaboration and freelance requests.
        </p>
        <Link
          href={"mailto:diegovs_@outlook.com"}
          target="_a"
          className="
        w-max
        header-button 
        text-[16px]
        lg:text-[23px]
        py-2
        px-12 
        cursor-pointer 
        rounded-full 
        font-medium
        ">
          Contact Me
        </Link>
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
        lg:w-[30rem]
        lg:h-[30rem]
      " />
        <Image
          className="
        w-[20rem]
        md:max-lg:w-[25rem]
        lg:w-[40rem]
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