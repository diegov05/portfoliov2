'use client'

import { Navbar } from '@/components/navbar'
import { Header } from '@/components/header'
import { HorizontalTechStack } from '@/components/tech-stack/tech-stack'
import { LearnMoreSection } from '@/containers/learn-more'
import { ExperienceSection } from '@/containers/experience'
import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import TechStackCarousel from '@/containers/tech-stack-carousel/tech-stack-carousel'
import { Projects } from '@/containers/projects/projects'
import { Testimonials } from '@/containers/testimonials'
import { Footer } from '@/containers/footer'

export default function Home() {

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <>
      <div
        className='
        flex 
        flex-col 
        gap-8
        md:max-[3000px]:gap-16
      '>
        <Navbar />
        <Header />
        <HorizontalTechStack />
        <main className='p-8'>
          <LearnMoreSection />
          <ExperienceSection />
          <TechStackCarousel />
          <Projects />
        </main>
        <footer id='contact' className='p-16 pb-0'>
          <Footer />
        </footer>
      </div>
    </>
  )
}
