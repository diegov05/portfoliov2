"use client";
import { useRef } from "react";

import { projects } from "./data/projectsData";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import './projects.css';
import { Badge } from "@/components/badge";
import { Title } from "@/components/title";

interface Project {
  name: string;
  badge: string;
  description: string;
  githubLink: string;
  livePreview: string;
  image: React.ReactNode;
}

export default function Work() {
  const workContainerRef = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const createWorkItem = (project: Project) => {
        const workItem = document.createElement("div");
        workItem.className = "work-item";
        workItem.innerHTML = `
        <a href="${project.githubLink}" class="work-item-link">
          <div class="work-item-img">
            <img src="${project.image}" alt="${project.name}" />
          </div>
          <div class="work-item-copy">
            <h3 class="text-white font-sans">${project.name}</h3>
            <p class="text-white font-sans opacity-80">${project.description}</p>
          </div>
        </a>
      `;
        return workItem;
      };

      const workContainer = workContainerRef.current;

      // @ts-ignore
      workContainer.innerHTML = "";

      for (let i = 0; i < projects.length; i += 2) {
        const row = document.createElement("div");
        row.className = "row";

        const leftItemIndex = i;
        const rightItemIndex = i + 1;

        row.appendChild(createWorkItem(projects[leftItemIndex]));

        if (rightItemIndex < projects.length) {
          row.appendChild(createWorkItem(projects[rightItemIndex]));
        }

        // @ts-ignore
        workContainer.appendChild(row);
      }

      gsap.set(".work-item", {
        y: 1000,
      });

      document.querySelectorAll(".row").forEach((row) => {
        const workItems = row.querySelectorAll(".work-item");

        workItems.forEach((item, itemIndex) => {
          const isLeftProjectItem = itemIndex === 0;
          gsap.set(item, {
            rotation: isLeftProjectItem ? -60 : 60,
            transformOrigin: "center center",
          });
        });

        ScrollTrigger.create({
          trigger: row,
          start: "top 50%",
          onEnter: () => {
            gsap.to(workItems, {
              y: 0,
              rotation: 0,
              duration: 1,
              ease: "power4.out",
              stagger: 0.25,
            });
          },
        });
      });
    },
    { scope: workContainerRef }
  );

  return (
    <section className="bg-[#050505]">
      <div className="mx-auto text-center w-max mb-16">
        <Badge content="[ Selected Projects ]" className="text-green-200 mx-auto mb-4" />
        <Title className="text-white font-sans tracking-tighter">Builds & Experiments</Title>
      </div>
      <div className="work" id="projects" ref={workContainerRef}></div>
    </section>
  );
}





// import { Badge } from "@/components/badge"
// import { Title } from "@/components/title"
// import { projects } from "./data/projectsData"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"
// import { ArrowUpRight, Github } from "lucide-react"

// export const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="
//         flex
//         flex-col
//         gap-8
//         pt-32
//         xl:pt-48
//         md:px-28
//         px-16
//         bg-[#050505]
//     ">
//       <div
//         className="
//         flex
//         flex-col
//         gap-4
//       ">
//         <Badge content="[ My Work ]" className="text-green-400" />
//       </div>
//       {projects.map((project) => (
//         <div
//           key={project.name}
//           className="
//           mt-12
//           md:mt-32
//           flex
//           flex-col
//           md:flex-row
//           justify-between
//           items-start
//           overflow-hidden
//           gap-16
//           ">
//           <div
//             data-aos="fade-up"
//             data-aos-duration="1000"
//             className="
//             flex
//             flex-col
//             gap-4
//             md:gap-8
//           ">
//             <div
//               className="
//               flex
//               flex-col
//               gap-4
//       ">
//               <div
//                 className="
//               w-max
//               badge-gradient
//               rounded-full
//               flex
//               flex-col
//     ">
//                 <span
//                   className="
//                 uppercase
//                 font-medium
//                 font-mono
//                 badge-text
//                 text-sm
//                 sm:text-sm
//                 lg:text-base
//                 px-4
//                 py-1
//                 rounded-full
//                 text-black
//                 bg-green-400
//               ">
//                   {project.badge}
//                 </span>
//               </div>
//               <h3
//                 className="
//                 title-gradient
//               font-medium
//               leading-normal
//               text-[23px]
//               sm:max-lg:text-[32px]
//               lg:text-6xl
//               transition-all
//               font-sans
//               tracking-tighter
//               text-white
//             ">
//                 {project.name}
//               </h3>
//             </div>
//             <p
//               className="
//               text-white
//               font-normal
//               text-sm
//               md:text-base
//               font-sans
//               opacity-80
//               max-w-xl
//               text-balance
//           ">
//               {project.description}
//             </p>
//             <div
//               className="
//               flex
//               flex-row
//               gap-2
//             ">
//               <Button
//                 className="font-sans"
//                 asChild
//                 variant="default"
//               >
//                 <Link href={project.githubLink}>
//                   Visit Repo
//                   <Github className="size-4" />
//                 </Link>
//               </Button>
//               {project.livePreview &&
//                 <Button
//                   asChild
//                   variant="secondary"
//                   className="font-sans"
//                 >
//                   <Link href={project.livePreview}>
//                     Live Preview
//                     <ArrowUpRight className="size-4" />
//                   </Link>
//                 </Button>
//               }
//             </div>
//           </div>
//           {project.image}
//         </div>
//       ))}
//     </section>
//   )
// }