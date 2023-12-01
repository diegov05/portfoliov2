import { Title } from "./title"

export const Header: React.FC = () => {
  return (
    <header
      className="
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
          text-xs
          sm:max-lg:text-sm
          lg:max-[3000px]:text-lg
          ">
          DESIGN . CODE . DEPLOY
        </p>
        <Title className="text-center">
          Engaging<br
            className="hidden min-[500px]:block"
          />
          <span className="header-title-gradient">
            Web Experiences.
          </span>
        </Title>
      </div>
      <h2
        className="
        text-secondary
        text-sm
        sm:max-lg:text-lg
        lg:max-[3000px]:text-xl 
        text-center
        ">
        Revealing Code Insights, Debugging Glitches,
        <br
          className="hidden min-[500px]:block"
        />
        and Ensuring Seamless Functionality.
      </h2>
      <button
        type="button"
        className="
        header-button 
        text-sm
        sm:max-lg:text-lg
        lg:max-[3000px]:text-xl
        py-2
        px-12 
        cursor-pointer 
        rounded-full 
        font-extrabold
        ">
        Contact Me
      </button>
      <a
        className="
        header-link 
        text-xs
        sm:max-lg:text-sm
        lg:max-[3000px]:text-lg
        text-center 
        font-medium"
        href="">
        Check out the work I&apos;ve done
      </a>
    </header>
  )
}