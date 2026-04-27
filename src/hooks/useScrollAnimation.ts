import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";

interface UseScrollAnimationOptions {
  trigger?: string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    gsap.from(ref.current.children, {
      scrollTrigger: {
        trigger: options.trigger ? document.querySelector(options.trigger) : ref.current,
        start: options.start || "top 80%",
        end: options.end,
        scrub: options.scrub,
        markers: options.markers,
      },
      y: 60,
      opacity: 0,
      stagger: 0.12,
      duration: 0.8,
      ease: "power3.out",
    });
  }, { scope: ref });

  return ref;
}
