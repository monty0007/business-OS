import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../lib/gsap";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const isTouch = useRef(false);

  useEffect(() => {
    isTouch.current = navigator.maxTouchPoints > 0;
  }, []);

  useGSAP(() => {
    if (isTouch.current || !dotRef.current) return;

    const dot = dotRef.current;
    dot.style.display = "block";

    const onMove = (e: MouseEvent) => {
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out",
      });
    };

    const onEnter = () => {
      gsap.to(dot, { scale: 3, opacity: 0.4, duration: 0.3 });
    };

    const onLeave = () => {
      gsap.to(dot, { scale: 1, opacity: 1, duration: 0.3 });
    };

    window.addEventListener("mousemove", onMove);

    const hoverables = document.querySelectorAll("a, button, [data-hover]");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  });

  if (typeof navigator !== "undefined" && navigator.maxTouchPoints > 0) return null;

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed top-0 left-0 z-[99999] hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500 mix-blend-difference"
    />
  );
}
