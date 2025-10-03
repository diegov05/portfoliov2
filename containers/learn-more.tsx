// app/(or components)/LearnMoreSection.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/badge";
import { Title } from "@/components/title";
import Image from "next/image";
import FadeContent from "@/components/ui/fade-content";
import { useBackgroundTransition } from "@/hooks/useBackgroundTransition";
import { Palette, PanelsTopLeft, Server, Workflow } from "lucide-react";

type Service = {
  id: string;
  title: string;
  icon: React.ReactNode;
  summary: string;      // short copy under the big heading (right column)
  blurb?: string;       // optional extra text
  image: string;
  detailsHref?: string;
  bookHref?: string;
};

const SERVICES: Service[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: <PanelsTopLeft className="size-4" />,
    summary:
      "Production-ready UIs with React/Next.js, strong typing, and great UX. I focus on accessibility, performance, and clean component architecture.",
    image: "/assets/services/frontend.png",
    detailsHref: "#projects",
    bookHref: "#contact",
  },
  {
    id: "fullstack",
    icon: <Server className="size-4" />,
    title: "Full-Stack Solutions",
    summary:
      "Type-safe APIs, databases, and auth. Next.js routes, Prisma + PostgreSQL, and deployments on Vercel/Supabase/AWS.",
    image: "/assets/services/backend.png",
    detailsHref: "#projects",
    bookHref: "#contact",
  },
  {
    id: "design",
    title: "Design & Experience",
    icon: <Palette className="size-4" />,
    summary:
      "From Figma to code: tokenized design systems, Tailwind theming, and micro-interactions that feel smooth and on-brand.",
    image: "/assets/services/design.png",
    detailsHref: "#projects",
    bookHref: "#contact",
  },
  {
    id: "enablement",
    title: "Product Enablement",
    icon: <Workflow className="size-4" />,
    summary:
      "Incremental roadmaps, DX tooling, docs, and handoff. I make teams faster with better processes and clear patterns.",
    image: "/assets/services/product.png",
    detailsHref: "#projects",
    bookHref: "#contact",
  },
];

export const LearnMoreSection = () => {
  const [active, setActive] = useState<string>(SERVICES[0].id);
  const [isTransitioning, setIsTransitioning] = useState(false);
  // Support #hash deep-linking (e.g. /#fullstack)
  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash.replace("#", "") : "";
    if (hash && SERVICES.some((s) => s.id === hash)) setActive(hash);
  }, []);

  const current = useMemo(
    () => SERVICES.find((s) => s.id === active) ?? SERVICES[0],
    [active]
  );

  // Handle service switching with animation
  const switchService = (serviceId: string) => {
    if (serviceId !== active && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActive(serviceId);
        setTimeout(() => setIsTransitioning(false), 100);
      }, 150);
    }
  };

  // keyboard support for the left list
  const onKey = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = SERVICES[(index + 1) % SERVICES.length];
      switchService(next.id);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = SERVICES[(index - 1 + SERVICES.length) % SERVICES.length];
      switchService(prev.id);
    }
  };

  return (
    <FadeContent duration={800} delay={200}>
      <section
        id="learn-more"
        className="relative w-auto md:w-auto mx-auto py-16 sm:py-20 px-8 md:px-16 2xl:px-28"
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-10">
          {/* LEFT: sticky heading + list */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <Badge content="[ Services ]" className="mb-4 text-green-800" />
              <Title className="font-sans tracking-tighter font-medium leading-[1] max-w-md">
                Expert execution for your specific needs
              </Title>
              <p className="mt-3 max-w-md text-pretty text-base leading-6 text-zinc-600 font-sans">
                I turn designs into fast, accessible, production-ready apps. From
                frontend polish to data and deploys—clear scope, reliable delivery.
              </p>

              <ul className="mt-8 divide-y divide-zinc-200 rounded-2xl border border-zinc-200 bg-white/70 backdrop-blur md:mt-10 max-w-sm">
                {SERVICES.map((s, i) => {
                  const activeItem = active === s.id;
                  return (
                    <li key={s.id} className="px-4">
                      <button
                        onClick={() => switchService(s.id)}
                        onKeyDown={(e) => onKey(e, i)}
                        aria-selected={activeItem}
                        aria-controls={`service-panel-${s.id}`}
                        className={[
                          "flex w-full items-center justify-between py-4 text-left outline-none transition-colors",
                          activeItem
                            ? "text-zinc-900"
                            : "text-zinc-400 hover:text-zinc-700",
                        ].join(" ")}
                      >
                        <span className="text-base font-medium font-sans flex items-center gap-2">{s.icon} {s.title}</span>
                        <span
                          className={[
                            "h-2 w-2 rounded-full transition-opacity",
                            activeItem ? "opacity-100 bg-zinc-900" : "opacity-0",
                          ].join(" ")}
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>

          {/* RIGHT: image + content */}
          <div className="lg:col-span-6">
            <div
              key={`image-${current.id}`}
              className="overflow-hidden rounded-3xl bg-zinc-100"
              style={{
                opacity: isTransitioning ? 0 : 1,
                transform: isTransitioning ? 'translateY(10px)' : 'translateY(0)',
                transition: 'opacity 300ms ease-out, transform 300ms ease-out'
              }}
            >
              <div className="relative aspect-[16/9] w-full">
                <Image
                  key={current.image}
                  src={current.image}
                  alt={current.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  width={1024}
                  height={640}
                />
              </div>
            </div>

            <div
              key={`content-${current.id}`}
              className="mt-6"
              style={{
                opacity: isTransitioning ? 0 : 1,
                transform: isTransitioning ? 'translateY(15px)' : 'translateY(0)',
                transition: 'opacity 400ms ease-out, transform 400ms ease-out'
              }}
            >
              <div
                id={`service-panel-${current.id}`}
                role="region"
                aria-labelledby={current.id}
              >
                <h3 className="text-2xl font-semibold tracking-tight text-zinc-900 font-sans flex items-center gap-2">
                  {current.icon}
                  {current.title}
                </h3>
                <p className="mt-2 max-w-3xl text-[15px] leading-7 text-zinc-600 font-sans md:text-pretty text-balance">
                  {current.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Button asChild variant="default" className="font-sans">
                    <Link href={current.detailsHref ?? "#projects"}>Read the case study</Link>
                  </Button>
                  <Button asChild variant="outline" className="font-sans">
                    <Link href={current.bookHref ?? "#contact"}>Get in touch</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeContent>
  );
};
