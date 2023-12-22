import Image from "next/image";
import filmaster from "@/assets/projects-images/filmaster.png"

export const FilmasterImage = () => {
  return (
    <span>
      <div
        className="
        absolute
        bg-gradient-radial
        from-[#1E1E1E00]
        to-[#E499FF33]
        via-[#E499FF]
        lg:max-xl:right-52
        lg:max-[3000px]:right-80
        blur-3xl
        md:max-lg:w-[20rem]
        md:max-lg:h-[25rem]
        lg:max-xl:w-[25rem]
        lg:max-xl:h-[25rem]
        lg:max-[3000px]:w-[30rem]
        lg:max-[3000px]:h-[35rem]
        opacity-20
        rounded-full
        -z-10
      ">

      </div>
      <Image
        width={3376}
        height={4261}
        alt="filmaster-project"
        src={filmaster}
        className="
        w-[20rem]
        md:max-lg:w-[25rem]
        lg:max-[3000px]:w-[40rem]
        h-auto
      " />
    </span>
  );
}

