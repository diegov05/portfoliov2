import Image from "next/image";
import spotify from "@/assets/projects-images/spotify.png"

export const SpotifyImage = () => {
  return (
    <span>
      <div
        className="
        absolute
        bg-gradient-radial
        from-[#1E1E1E00]
        to-[#E499FF33]
        via-[#265743]
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
        alt="spotify-project"
        src={spotify}
        className="
        w-[20rem]
        md:max-lg:w-[25rem]
        lg:max-[3000px]:w-[40rem]
        h-auto
      " />
    </span>
  );
}

