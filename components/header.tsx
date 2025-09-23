import { SparklesIcon } from "lucide-react"
import { Button } from "./ui/button"
import PixelBlast from "./ui/pixel-blast"
import Link from "next/link"
import SplitText from "./ui/split-text"
import FadeContent from "./ui/fade-content"

export const Header: React.FC = () => {
  return (
    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
      <div id="home" style={{ width: '100%', height: '100dvh', position: 'relative' }}>
        <PixelBlast
          variant="square"
          pixelSize={2}
          color="#008236"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={2}
          edgeFade={0.25}
          transparent
          className="opacity-20"
        />

        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start px-8 md:px-16 2xl:px-28">
          <h3 className="text-lg font-medium font-mono text-black/60 mb-6">
            [ DESIGN . CODE . DELIVER ]
          </h3>
          <h1 className="text-7xl font-medium font-sans tracking-tighter text-black mb-6">
            <SplitText
              text="Hello, I'm Diego!"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: -2 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
            />
          </h1>
          <p className="text-base md:text-xl font-normal font-sans text-black opacity-70 mb-6 max-w-xl text-balance text-green">
            I'm a mid-level software engineer with a focus on building high-performance, engaging & scalable digital experiences.
          </p>
          <Button size={'lg'} asChild variant="default" className="font-sans mb-4 text-base">
            <Link href="#contact">
              Get in touch
              <SparklesIcon className="-me-1 opacity-80" size={16} aria-hidden="true" />
            </Link>
          </Button>

          <Button size={'lg'} asChild variant="link" className="font-sans mb-6 px-0 text-green-700 text-base">
            <Link href="#projects">
              Check out my work {'->'}
            </Link>
          </Button>
        </div>

      </div>
    </FadeContent>
  )
}