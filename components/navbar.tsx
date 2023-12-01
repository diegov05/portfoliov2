'use client'

import { useState } from "react"

export const Navbar: React.FC = () => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open)
  }

  const linksMap = [
    {
      linkText: "About Me",
      href: "/"
    },
    {
      linkText: "Resume",
      href: "/"
    },
    {
      linkText: "Experience",
      href: "/"
    },
    {
      linkText: "My Work",
      href: "/"
    },
    {
      linkText: "Contact Me",
      href: "/"
    },
  ]

  return (
    <>
      <nav className={`
        mobile-nav
        fixed
        flex
        ${open ? "h-[50vh] w-screen" : "h-[50vh] w-0"}
        right-0
        top-0
        backdrop-blur-md
        transition-all
        duration-300
        bg-gray-950/50
        `}
      >
        <ul className="border-0 w-full pt-20">
          {linksMap.map(({ linkText, href }) => (
            <li
              key={linkText}
              className="navbar-links-item flex flex-row items-center gap-4"
            >
              <a href={`/${href}`}>{linkText}</a>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 text-slate-600">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>

            </li>
          ))}
        </ul>
      </nav>

      <nav
        className="
        z-10
        w-full
        flex 
        justify-end 
        items-end 
        sm:max-[3000px]:items-center 
        sm:max-[3000px]:justify-center
        p-8
      ">
        <button onClick={handleOpen} className="block sm:max-[3000px]:hidden">
          {!open ?
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-[#E9ECEA]">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-[#E9ECEA]">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          }
        </button>
        <ul className="
        hidden
        sm:max-[3000px]:flex 
        flex-row 
        gap-8 
        py-1
        px-8   
        rounded-3xl 
        items-center 
        justify-center 
        border">
          <li><a className="navbar-links-text" href="">About me</a></li>
          <li><a className="navbar-links-text" href="">Resume</a></li>
          <li><a className="navbar-links-text" href="">Experience</a></li>
          <li><a className="navbar-links-text" href="">My Work</a></li>
          <li><a className="navbar-links-text" href="">Contact Me</a></li>
        </ul>
      </nav>
    </>
  )
}