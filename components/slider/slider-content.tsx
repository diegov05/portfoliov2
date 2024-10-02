interface SliderContentProps {
  role: string;
  company: string;
  date: string;
  bulletPoints: string[]; // Array of bullet points
}

export const SliderContent: React.FC<SliderContentProps> = ({ role, company, date, bulletPoints }) => {
  return (
    <section
      className="
        w-full
        flex
        flex-col
        transition-all
        gap-8
      "
    >
      <div
        className="
        flex 
        flex-col 
        gap-4
      "
      >
        <h1
          className="
          title-gradient
          w-[60vw]
          font-medium
          leading-normal
          text-[23px]
          sm:max-lg:text-[32px]
          lg:text-[45px]
          transition-all
        "
        >
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
          lg:text-[23px]
          font-normal
          text-[#E1F8FF]
          opacity-70
        "
        >
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
      "
      >
        {bulletPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </section>
  );
};
