import { useEffect, useRef } from "react";
import gsap from "gsap";

// Lazy load ScrollTrigger to avoid SSR issues
let ScrollTrigger: any;

export const useBackgroundTransition = () => {
  const hasRegistered = useRef(false);

  useEffect(() => {
    const initScrollTrigger = async () => {
      if (typeof window === "undefined") return;

      if (!hasRegistered.current) {
        // Dynamically import ScrollTrigger to avoid SSR issues
        const { ScrollTrigger: ST } = await import("gsap/ScrollTrigger");
        ScrollTrigger = ST;
        gsap.registerPlugin(ScrollTrigger);
        hasRegistered.current = true;
      }

      // Target the body element for background color changes
      const body = document.body;
      const originalBgClass = body.className;

      // Create triggers array to track all created triggers
      const triggers: any[] = [];

      // Create the scroll trigger for blur and background transition
      const experienceTrigger = ScrollTrigger.create({
        trigger: "#learn-more",
        start: "bottom center", // Start when bottom of learn-more reaches center
        end: "+=100vh", // Pin for the height of viewport for smooth transition
        pin: true, // Pin the learn-more section during transition
        scrub: 1, // Smooth scrubbing for real-time updates
        anticipatePin: 1, // Smooth pin start

        onUpdate: (self: any) => {
          const progress = self.progress;
          const learnMoreSection = document.getElementById("learn-more");
          const experienceSection = document.getElementById("experience");

          if (learnMoreSection && experienceSection) {
            // Use gsap.set for performance during scrubbing
            const learnMoreBlur = progress * 20;
            const experienceBlur = (1 - progress) * 25;
            const learnMoreOpacity = 1 - progress * 0.5; // More dramatic fade
            const experienceOpacity = progress; // Full fade from 0 to 1

            // Blur out learn-more section (pinned in place)
            gsap.set(learnMoreSection, {
              filter: `blur(${learnMoreBlur}px)`,
              opacity: learnMoreOpacity,
              scale: 1 + progress * 0.1, // Slight scale for depth
              willChange: "filter, opacity, transform",
            });

            // Position and blur in experience section to overlay
            gsap.set(experienceSection, {
              filter: `blur(${experienceBlur}px)`,
              opacity: experienceOpacity,
              y: (1 - progress) * -100, // Slide up from below
              scale: 0.9 + progress * 0.1, // Scale in effect
              willChange: "filter, opacity, transform",
            });

            // Background color transition
            const bgProgress = Math.min(progress * 1.2, 1); // Slightly faster bg transition
            const lightColor = "rgb(240, 253, 244, 0.3)";
            const darkColor = "rgb(5, 5, 5, 1)";

            gsap.set(body, {
              backgroundColor: gsap.utils.interpolate(
                lightColor,
                darkColor,
                bgProgress
              ),
            });
          }
        },

        onEnter: () => {
          // Pin has started - no additional animations needed during pinning
          // The onUpdate will handle all transitions smoothly
        },

        onComplete: () => {
          const learnMoreSection = document.getElementById("learn-more");
          const experienceSection = document.getElementById("experience");

          if (learnMoreSection && experienceSection) {
            // Ensure final states after pin completes
            gsap.set(learnMoreSection, {
              filter: "blur(20px)",
              opacity: 0.5,
              scale: 1.1,
              willChange: "auto",
            });

            gsap.set(experienceSection, {
              filter: "blur(0px)",
              opacity: 1,
              y: 0,
              scale: 1,
              willChange: "auto",
            });
          }
        },

        onReverseComplete: () => {
          const learnMoreSection = document.getElementById("learn-more");
          const experienceSection = document.getElementById("experience");

          if (learnMoreSection && experienceSection) {
            // Reset to initial states when pin reverses completely
            gsap.set(learnMoreSection, {
              filter: "blur(0px)",
              opacity: 1,
              scale: 1,
              willChange: "auto",
            });

            gsap.set(experienceSection, {
              filter: "blur(25px)",
              opacity: 0,
              y: -100,
              scale: 0.9,
              willChange: "auto",
            });

            gsap.set(body, {
              backgroundColor: "rgb(240, 253, 244, 0.3)",
            });
          }
        },

        // Optional: Add markers for debugging (remove in production)
        // markers: true,
      });

      triggers.push(experienceTrigger);

      // Initialize experience section with blurred state for pinned transition
      const experienceSection = document.getElementById("experience");
      if (experienceSection) {
        gsap.set(experienceSection, {
          filter: "blur(25px)",
          opacity: 0,
          y: -100,
          scale: 0.9,
          zIndex: 10, // Ensure it overlays during transition
        });
      }

      // Ensure learn-more section is ready for pinning
      const learnMoreSection = document.getElementById("learn-more");
      if (learnMoreSection) {
        gsap.set(learnMoreSection, {
          filter: "blur(0px)",
          opacity: 1,
          scale: 1,
          zIndex: 5,
        });
      }

      // Create trigger for footer section to maintain dark background
      const footerTrigger = ScrollTrigger.create({
        trigger: "#contact",
        start: "top 90%",
        onEnter: () => {
          // Ensure background stays dark for footer
          gsap.to(body, {
            backgroundColor: "#050505",
            duration: 0.3,
            ease: "power2.out",
          });
        },
      });

      triggers.push(footerTrigger);

      // Cleanup function
      return () => {
        triggers.forEach((trigger) => trigger.kill());
      };
    };

    const cleanup = initScrollTrigger();

    return () => {
      cleanup?.then?.((cleanupFn) => cleanupFn?.());
    };
  }, []);
};
