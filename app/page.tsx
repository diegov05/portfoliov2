import { Navbar } from '@/components/navbar'
import { Header } from '@/components/header'
import { HorizontalTechStack } from '@/components/tech-stack/tech-stack'

export default function Home() {
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
        <main></main>
      </div>
    </>
  )
}
