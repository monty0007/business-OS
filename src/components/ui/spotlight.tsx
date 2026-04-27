import { useEffect, useRef } from "react";
import { cn } from "../../lib/utils";

interface SpotlightProps {
  className?: string;
  fill?: string;
}

export function Spotlight({ className, fill = "#ea580c" }: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mousePos.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      containerRef.current.style.setProperty("--x", `${mousePos.current.x}px`);
      containerRef.current.style.setProperty("--y", `${mousePos.current.y}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div
        className="absolute h-[300px] w-[300px] rounded-full opacity-15 blur-[100px] transition-opacity duration-500"
        style={{
          background: fill,
          left: "var(--x, 50%)",
          top: "var(--y, 50%)",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
}
