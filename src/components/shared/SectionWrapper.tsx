import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../lib/gsap";
import { cn } from "../../lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function SectionWrapper({ children, className, id }: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!ref.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const els = ref.current.querySelectorAll("[data-animate]");
    els.forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });
    });
  }, { scope: ref });

  return (
    <section
      ref={ref}
      id={id}
      className={cn("relative py-20 md:py-32 px-4 md:px-8", className)}
    >
      {children}
    </section>
  );
}
