interface SliderContentProps {
  role: string
  company: string
  date: string
}

export const SliderContent: React.FC<SliderContentProps> = ({ role, company, date }) => {
  return (
    <section
      className="
        w-full
        flex
        flex-col
        md:max-[3000px]:justify-start
        md:max-[3000px]:items-start
        max-md:justify-center
        max-md:items-center
        transition-all
        gap-8
      ">
      <div
        className="
        flex 
        flex-col 
        gap-4
        md:max-[3000px]:justify-start
        md:max-[3000px]:items-start
        max-md:justify-center
        max-md:items-center
      ">
        <h1
          className="
          w-[60vw]
        text-[#e9ecea]
        font-extrabold
        leading-normal
        text-[23px]
        sm:max-lg:text-[32px]
        lg:max-[3000px]:text-[45px]
        max-md:text-center
        transition-all
    ">
          {role}
          <br />
          <span className="company-gradient transition-all">
            @ {company}
          </span>
        </h1>
        <h2
          className="
          text-[11px]
          sm:max-lg:text-[16px]
          lg:max-[3000px]:text-[23px]
          font-semibold
          text-[#E1F8FF]
          opacity-70
        ">
          {date}
        </h2>
      </div>
      <ul
        className="
        w-[50vw]
        max-md:w-auto
        experience-list
        flex
        flex-col
        gap-8
      ">
        <li>
          Got hired as a Software Engineering Intern by MediaSoft Inc. while in my Junior year of High School. I was mostly assigned front-end tasks but also did some API handling. The internship consisted in 8 months of development, learning and mentoring from senior developers, code reviewing, code testing and task management.
        </li>
        <li>
          During my internship, I led the creation of a really helpful Server Dashboard App. It made things easier, boosting how much we got done by 20%. It was a game-changer, making our work smoother and more efficient.
        </li>
        <li>
          Working closely with a great team, we built modern web apps that were easy to manage and grow. Our work contributed to a 15% increase in the company&apos;s earnings, showing how our ideas could make a real difference.
        </li>
        <li>
          One of my big projects was keeping up the company&apos;s dashboard page. We made it work much better, speeding up how things got done by 25%. That meant the senior team could focus on bigger tasks, which helped the company grow.
        </li>
        <li>
          These experiences taught me a lot and fueled my passion for using tech to solve problems. It&apos;s what drives me to keep making things better and finding smarter solutions.
        </li>
      </ul>
    </section>
  )
}