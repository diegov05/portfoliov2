'use client';

import { useState } from "react"

import { SliderContent } from "./slider-content";
import data from "./data/data.json"
import "./styles/slider.css"


export const Slider = () => {

  const [selected, setSelected] = useState("MediaSoft")
  const [index, setIndex] = useState(0)

  const handleClick = (selectedCompany: string) => {
    const newIndex = data.findIndex(item => item.company === selectedCompany);
    if (newIndex !== -1) {
      setIndex(newIndex);
    }
    setSelected(selectedCompany);
  }

  return (
    <section
      className="
      flex 
      flex-col 
      md:max-[3000px]:flex-row 
      gap-16 
      w-full
      max-md:items-center
      max-md:justify-center
    ">
      <ul className="flex flex-row md:max-[3000px]:flex-col">
        {data.map(({ company }) => (
          <li
            onClick={() => handleClick(company)}
            className={`
            slider-item 
            ${selected === company
                ? "selected-slider-item"
                : ""}
             text-[11px]
             sm:max-lg:text-[16px]
             lg:max-[3000px]:text-[23px]
            `}
            key={company}
          >
            {company}
          </li>
        ))}
      </ul>
      <SliderContent
        role={data[index].role}
        company={data[index].company}
        date={data[index].date}
      />
    </section>
  )
}
