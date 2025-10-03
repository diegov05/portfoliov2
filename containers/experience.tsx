"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

// NOTE: import gsap without plugins at module scope (ok in Next.js)
import gsap from "gsap";
import './experience.css'
import { Badge } from "@/components/badge";

// We'll lazy-register plugins inside useEffect to avoid SSR issues.
let ScrollTrigger: any;
let SplitText: any;

type Card = {
  title: string;
  description: string;
  img: string;
};

const CARDS: Card[] = [
  {
    title: "Hire Horatio",
    description:
      "A 100-page corporate site reimagined as a modular system of reusable components, where performance and accessibility crown the architecture.",
    img: "/assets/experience/horatio.webp",
  },
  {
    title: "Mentors CX",
    description:
      "A community platform built from the ground up, fusing full-stack precision with seamless identity flows to create a polished digital gathering space.",
    img: "/assets/experience/mentors-cx.webp",
  },
  {
    title: "Neutron Technology",
    description:
      "A responsive industrial hub, balancing Sanity CMS flexibility with a tailored Next.js framework, designed to adapt across industries with elegance.",
    img: "/assets/experience/neutron.jpeg",
  },
  {
    title: "Caribbean by Camille",
    description:
      "A jewelry e-commerce flagship, sculpted with the refinement of Mejuri and Tiffany, marrying luxury brand storytelling with scalable CMS infrastructure.",
    img: "/assets/experience/caribbeanbycamille.jpg",
  },
  {
    title: "Saulito Studios",
    description:
      "A digital portfolio conceived as an interactive stage, where modern UI and motion design elevate creativity into performance.",
    img: "/assets/experience/saulito.jpeg",
  },
];

// Fallback for SplitText if you don't have Club GSAP.
// It wraps each char in <div class="char"><span>…</span></div>
function splitTextFallback(el: HTMLElement) {
  const text = el.textContent ?? "";
  el.textContent = "";
  const frag = document.createDocumentFragment();
  for (const ch of text) {
    const wrap = document.createElement("div");
    wrap.className = "char";
    const span = document.createElement("span");
    span.textContent = ch;
    wrap.appendChild(span);
    frag.appendChild(wrap);
  }
  el.appendChild(frag);
  // return a structure that mimics SplitText's API a bit
  return {
    chars: Array.from(el.querySelectorAll(".char span")) as HTMLElement[],
  };
}

export default function ExperienceSection() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let lenisCleanup: (() => void) | undefined;

    (async () => {
      // Dynamically import to avoid SSR problems
      const [{ ScrollTrigger: ST }, { default: Lenis }] = await Promise.all([
        import("gsap/ScrollTrigger"),
        import("lenis"),
      ]);
      ScrollTrigger = ST;
      gsap.registerPlugin(ScrollTrigger);

      // Try to import SplitText (Club GSAP). If it fails, use fallback.
      try {
        const mod = await import("gsap/SplitText");
        SplitText = mod.SplitText;
        gsap.registerPlugin(SplitText);
      } catch {
        // no-op; fallback will be used
      }

      // Smooth scrolling
      const lenis = new Lenis();
      const onLenis = (time: number) => lenis.raf(time * 1000);
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(onLenis);
      gsap.ticker.lagSmoothing(0);

      lenisCleanup = () => {
        gsap.ticker.remove(onLenis);
        // @ts-ignore
        lenis.destroy?.();
      };

      // --- marquee setup
      setupMarqueeAnimation();

      // --- split titles
      const titles = gsap.utils.toArray<HTMLElement>(".card-title h1");
      titles.forEach((titleEl) => {
        if (SplitText) {
          const split = new SplitText(titleEl, {
            type: "chars",
            charsClass: "char",
            tag: "div",
          });
          split.chars.forEach((char: HTMLElement) => {
            char.innerHTML = `<span>${char.textContent}</span>`;
          });
        } else {
          splitTextFallback(titleEl);
        }
      });

      const cards = gsap.utils.toArray<HTMLElement>(".card");
      const introCard = cards[0];

      // Intro image setup
      const cardImgWrapper = introCard.querySelector(".card-img") as HTMLElement;
      const cardImg = introCard.querySelector(".card-img img") as HTMLElement;
      gsap.set(cardImgWrapper, { scale: 0.5, borderRadius: "400px" });
      gsap.set(cardImg, { scale: 1.5 });

      const marquee = introCard.querySelector(".card-marquee .marquee") as HTMLElement;
      const titleChars = introCard.querySelectorAll(".char span");
      const description = introCard.querySelector(".card-description") as HTMLElement;

      const animateContentIn = (chars: NodeListOf<Element>, desc: HTMLElement) => {
        gsap.to(chars, { x: "0%", duration: 0.75, ease: "power4.out" });
        gsap.to(desc, { x: 0, opacity: 1, duration: 0.75, delay: 0.1, ease: "power4.out" });
      };

      const animateContentOut = (chars: NodeListOf<Element>, desc: HTMLElement) => {
        gsap.to(chars, { x: "100%", duration: 0.5, ease: "power4.out" });
        gsap.to(desc, { x: "40px", opacity: 0, duration: 0.5, ease: "power4.out" });
      };

      ScrollTrigger.create({
        trigger: introCard,
        start: "top top",
        end: "+=300vh",
        // @ts-ignore
        onUpdate: (self) => {
          const progress = self.progress;
          const imgScale = 0.5 + progress * 0.5;
          const borderRadius = 400 - progress * 375;
          const innerImgScale = 1.5 - progress * 0.5;

          gsap.set(cardImgWrapper, { scale: imgScale, borderRadius: borderRadius + "px" });
          gsap.set(cardImg, { scale: innerImgScale });

          // marquee fade
          if (imgScale >= 0.5 && imgScale <= 0.75) {
            const fadeProgress = (imgScale - 0.5) / (0.75 - 0.5);
            gsap.set(marquee, { opacity: 1 - fadeProgress });
          } else if (imgScale < 0.5) {
            gsap.set(marquee, { opacity: 1 });
          } else if (imgScale > 0.75) {
            gsap.set(marquee, { opacity: 0 });
          }

          // content reveal
          if (progress >= 1 && !(introCard as any).contentRevealed) {
            (introCard as any).contentRevealed = true;
            animateContentIn(titleChars, description);
          }
          if (progress < 1 && (introCard as any).contentRevealed) {
            (introCard as any).contentRevealed = false;
            animateContentOut(titleChars, description);
          }
        },
      });

      // Pin each card
      cards.forEach((card, index) => {
        const isLast = index === cards.length - 1;
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          end: isLast ? "+=100vh" : "top top",
          endTrigger: isLast ? undefined : cards[cards.length - 1],
          pin: true,
          pinSpacing: isLast,
        });
      });

      // Scale-out previous card while next approaches
      cards.forEach((card, index) => {
        if (index < cards.length - 1) {
          const wrapper = card.querySelector(".card-wrapper") as HTMLElement;
          ScrollTrigger.create({
            trigger: cards[index + 1],
            start: "top bottom",
            end: "top top",
            // @ts-ignore
            onUpdate: (self) => {
              const p = self.progress;
              gsap.set(wrapper, { scale: 1 - p * 0.25, opacity: 1 - p });
            },
          });
        }
      });

      // Image scaling + radius for other cards
      cards.forEach((card, index) => {
        if (index === 0) return;
        const img = card.querySelector(".card-img img") as HTMLElement;
        const box = card.querySelector(".card-img") as HTMLElement;
        ScrollTrigger.create({
          trigger: card,
          start: "top bottom",
          end: "top top",
          // @ts-ignore
          onUpdate: (self) => {
            const p = self.progress;
            gsap.set(img, { scale: 2 - p });
            gsap.set(box, { borderRadius: 150 - p * 125 + "px" });
          },
        });
      });

      // Reveal titles/desc on enter for non-first cards
      cards.forEach((card, index) => {
        if (index === 0) return;
        const desc = card.querySelector(".card-description") as HTMLElement;
        const chars = card.querySelectorAll(".char span");
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          onEnter: () => animateContentIn(chars, desc),
          onLeaveBack: () => animateContentOut(chars, desc),
        });
      });
    })();

    return () => {
      // cleanup
      try {
        ScrollTrigger?.getAll().forEach((st: any) => st.kill());
        gsap.killTweensOf("*");
      } catch { }
      if (lenisCleanup) lenisCleanup();
    };
  }, []);

  return (
    <section id="experience" ref={rootRef} className="bg-[#050505] pt-24 overflow-x-hidden">
      <section className="intro">
        <Badge content="[ Relevant Experience ]" className="text-green-200" />
        <h2 className="font-sans tracking-tighter font-medium leading-tight text-[32px] sm:max-lg:text-[45px] lg:text-[64px] max-w-4xl text-center mt-4 text-green-50">Building highly performant, <span className="text-green-100">design-driven</span> web apps</h2>
      </section>

      <section className="cards -mt-36">
        {/* Card 0 with marquee */}
        <div className="card">
          <div className="card-marquee">
            <div className="marquee">
              <h1 className="font-sans tracking-tighter text-green-50/50">Web Design</h1>
              <h1 className="font-sans tracking-tighter text-green-50/50">Web Development</h1>
              <h1 className="font-sans tracking-tighter text-green-50/50">Systems Design</h1>
              <h1 className="font-sans tracking-tighter text-green-50/50">AI Integrations</h1>
            </div>
          </div>

          <div className="card-wrapper">
            <div className="card-content">
              <div className="card-title">
                <h1 className="font-medium leading-normal text-[32px] sm:max-lg:text-[45px] lg:text-[64px] font-sans tracking-tighter text-white">Hire Horatio</h1>
              </div>
              <div className="card-description">
                <p className="text-white text-base lg:text-lg w-auto font-sans text-center">
                  A futuristic residence that plays with curvature and flow,
                  blending bold geometry with natural topography.
                </p>
              </div>
            </div>

            <div className="card-img">
              <Image src="/assets/experience/horatio.webp" className="object-cover" alt="" fill priority sizes="100vw" />
            </div>
          </div>
        </div>

        {/* Other cards */}
        {CARDS.slice(1).map((c, i) => (
          <div className="card" key={c.title}>
            <div className="card-wrapper">
              <div className="card-content">
                <div className="card-title">
                  <h1 className="font-medium leading-normal text-[32px] sm:max-lg:text-[45px] lg:text-[64px] font-sans tracking-tighter text-white">{c.title}</h1>
                </div>
                <div className="card-description">
                  <p className="text-white text-base lg:text-lg w-auto font-sans text-center">{c.description}</p>
                </div>
              </div>

              <div className="card-img">
                <Image src={c.img} className="object-cover object-bottom" alt="" fill sizes="100vw" />
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}

function setupMarqueeAnimation() {
  const marqueeItems = gsap.utils.toArray<HTMLElement>(".marquee h1");
  if (!marqueeItems.length) return;

  horizontalLoop(marqueeItems, { repeat: -1, paddingRight: 30 });
}

function horizontalLoop(items: HTMLElement[], config: any) {
  items = gsap.utils.toArray(items);
  config = config || {};
  const tl = gsap.timeline({ repeat: config.repeat, defaults: { ease: "none" } });
  const length = items.length;
  const startX = items[0].offsetLeft;
  const widths: number[] = [];
  const xPercents: number[] = [];
  const pps = (config.speed || 1) * 100;

  gsap.set(items, {
    xPercent: (i: number, el: HTMLElement) => {
      const w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px") as string));
      xPercents[i] =
        (parseFloat(gsap.getProperty(el, "x", "px") as string) / w) * 100 +
        (gsap.getProperty(el, "xPercent") as number);
      return xPercents[i];
    },
  });
  gsap.set(items, { x: 0 });

  const last = items[length - 1];
  const totalWidth =
    last.offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    last.offsetWidth * (gsap.getProperty(last, "scaleX") as number) +
    (parseFloat(config.paddingRight) || 0);

  for (let i = 0; i < length; i++) {
    const item = items[i];
    const curX = (xPercents[i] / 100) * widths[i];
    const distanceToStart = item.offsetLeft + curX - startX;
    const distanceToLoop = distanceToStart + widths[i] * (gsap.getProperty(item, "scaleX") as number);

    tl.to(
      item,
      { xPercent: ((curX - distanceToLoop) / widths[i]) * 100, duration: distanceToLoop / pps },
      0
    ).fromTo(
      item,
      { xPercent: ((curX - distanceToLoop + totalWidth) / widths[i]) * 100 },
      {
        xPercent: xPercents[i],
        duration: (curX - distanceToLoop + totalWidth - curX) / pps,
        immediateRender: false,
      },
      distanceToLoop / pps
    );
  }

  tl.progress(1, true).progress(0, true);
  return tl;
}
