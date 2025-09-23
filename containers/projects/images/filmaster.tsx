import Image from "next/image";

export const FilmasterImage = () => {
  return (
    <Image
      width={1050}
      height={1050}
      priority
      alt="filmaster-project"
      src={"/assets/projects-images/filmaster.png"}
      className="
        h-96 w-auto
      " />
  );
}

