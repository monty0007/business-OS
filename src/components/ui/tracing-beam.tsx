import { cn } from "../../lib/utils";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TracingBeamProps {
  children: React.ReactNode;
  className?: string;
}

export function TracingBeam({ children, className }: TracingBeamProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[2px]">
        <div className="absolute inset-0 w-full bg-zinc-800" />
        <motion.div
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-orange-500 via-orange-400 to-transparent"
          style={{ height }}
        />
        <motion.div
          className="absolute w-3 h-3 -left-[5px] rounded-full bg-orange-500 shadow-[0_0_10px_rgba(234,88,12,0.5)]"
          style={{ top: height }}
        />
      </div>
      <div className="pl-12 md:pl-20">{children}</div>
    </div>
  );
}
