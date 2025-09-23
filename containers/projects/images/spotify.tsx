import Image from "next/image";

export const SpotifyImage = () => {
  return (
    <span>
      <Image
        width={1050}
        height={1050}
        priority
        alt="spotify-project"
        src={"/assets/projects-images/spotify.png"}
        className="
        h-96 w-auto
      " />
    </span>
  );
}

