import { Badge } from "@/components/badge";
import { Title } from "@/components/title";
import AnimatedContent from "@/components/ui/animated-content";
import { Button } from "@/components/ui/button";
import FadeContent from "@/components/ui/fade-content";
import { SparklesIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => (
  <>
    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
      <div
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
        mx-auto
      ">
          <div className="
        flex 
        flex-col 
        items-center
        justify-center
        gap-2 
        ">
            <Badge content="[ Contact Me ]" className="text-green-200" />
            <Title
              className="
          font-sans tracking-tighter text-white text-center
        ">
              Get In Touch
            </Title>
          </div>
          <p
            className="
          text-white
          text-base
          lg:text-lg
          sm:w-[35ch]
          w-auto
          font-sans
          text-center
          opacity-80
      ">
            Open for job opportunities, open-source collaboration and freelance requests.
          </p>
          <Button asChild
            className="
          w-max
          text-base
          cursor-pointer 
          font-sans
          mx-auto
        ">
            <Link href={"mailto:diegovs_@outlook.com"}>
              Contact Me
              <SparklesIcon className="-me-1 opacity-80" size={16} aria-hidden="true" />
            </Link>
          </Button>
        </div>
        <AnimatedContent>
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
              src={"/assets/phone2.png"}
              width={944}
              height={1022}
            />
          </div>
        </AnimatedContent>
      </div>
    </FadeContent>
  </>
)