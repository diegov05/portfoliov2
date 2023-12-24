'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react"

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open)
  }

  const linksMap = [
    {
      linkText: "About Me",
      href: "/#learn-more"
    },
    {
      linkText: "Resume",
      href: "https://drive.google.com/file/d/1sfiaPkFwlLhdVUoyzxvxjvUygs0giNTA/view?usp=sharing",
      target: "_a"
    },
    {
      linkText: "Experience",
      href: "/#experience"
    },
    {
      linkText: "My Work",
      href: "/#projects"
    },
    {
      linkText: "Contact Me",
      href: "/#contact"
    },
  ]

  return (
    <>
      <nav className={`
        fixed
        flex
        sm:max-[3000px]:hidden
        ${open ? "h-[100vh] w-screen" : "h-[100vh] w-0"}
        right-0
        top-6
        transition-all
        duration-1000
        bg-[#050505]/90
        backdrop-blur-sm
        z-40
        `}
      >
        <ul className="border-0 w-full pt-20">
          {linksMap.map(({ linkText, href, target }) => (
            <li
              key={linkText}
              className="
              navbar-links-item 
              flex 
              flex-row 
              items-center 
              gap-4 
              mobile-nav-gradient
              "
            >
              <Link target={target} onClick={() => setOpen(false)} href={href}>{linkText}</Link>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 text-slate-600">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </li>
          ))}
        </ul>
      </nav>

      <nav
        className="
        z-50
        w-full
        flex
        fixed
        justify-between 
        items-center 
        sm:max-[3000px]:items-center 
        sm:max-[3000px]:justify-between
        p-8
        backdrop-blur-md
        bg-[#050505]/50
        mobile-nav-gradient
        border-opacity-50
      ">
        <Link href={'/'} className="
          text-[#e9ecea]
            py-2
            px-4
            header-button
            transition
            hover:opacity-80
            rounded-md
            font-black
        ">
          DV
        </Link>
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
        <div className="sm:max-[3000px]:flex hidden justify-center items-center w-full">
          <ul className="
        hidden
        sm:max-[3000px]:flex 
        flex-row 
        gap-8 
        py-2
        px-8   
        rounded-3xl 
        items-center 
        justify-center 
        border">
            <li><Link className="navbar-links-text" href="/#learn-more">About me</Link></li>
            <li><Link className="navbar-links-text" target="_a" href="https://drive.google.com/file/d/1sfiaPkFwlLhdVUoyzxvxjvUygs0giNTA/view?usp=sharing">Resume</Link></li>
            <li><Link className="navbar-links-text" href="/#experience">Experience</Link></li>
            <li><Link className="navbar-links-text" href="/#projects">My Work</Link></li>
            <li><Link className="navbar-links-text" href="/#contact">Contact Me</Link></li>
          </ul>
        </div>
      </nav>
    </>
  )
}