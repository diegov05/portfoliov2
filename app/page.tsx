import { Footer } from "@/containers/footer";
import { Header } from '@/components/header'
import { HorizontalTechStack } from '@/components/tech-stack/tech-stack'
import { LearnMoreSection } from '@/containers/learn-more'
import ExperienceSection from "@/containers/experience";
import TechStackCarousel from '@/containers/tech-stack-carousel/tech-stack-carousel'
import Navbar from "@/components/navbar";
import TetrisDivider from "@/components/ui/pixel-divider";
import Image from "next/image";
import Work from "@/containers/projects/projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <HorizontalTechStack />
      <main className=''>
        <LearnMoreSection />
        <Image className="w-screen h-64" src="/gradient.png" alt="Pixel Blast" width={2000} height={2000} />
        <ExperienceSection />
        <TechStackCarousel />
        <Work />
      </main>
      <footer id='contact' className='p-16 pb-0 bg-[#050505]'>
        <Footer />
      </footer>
    </>
  );
}
