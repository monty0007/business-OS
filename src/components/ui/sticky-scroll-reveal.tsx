import { cn } from "../../lib/utils";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface StickyScrollRevealProps {
  content: {
    title: string;
    description: string;
  }[];
  contentClassName?: string;
  stickyContent?: React.ReactNode;
}

export function StickyScrollReveal({
  content,
  contentClassName,
  stickyContent,
}: StickyScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Scrolling text content */}
        <div className="flex-1">
          {content.map((item, idx) => {
            const start = idx / content.length;
            const end = (idx + 1) / content.length;
            return (
              <ContentCard
                key={idx}
                item={item}
                index={idx}
                progress={scrollYProgress}
                range={[start, end]}
                className={contentClassName}
              />
            );
          })}
        </div>
        {/* Sticky visual */}
        <div className="hidden lg:block flex-1">
          <div className="sticky top-32">{stickyContent}</div>
        </div>
      </div>
    </div>
  );
}

function ContentCard({
  item,
  index,
  progress,
  range,
  className,
}: {
  item: { title: string; description: string };
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
  className?: string;
}) {
  const opacity = useTransform(progress, [range[0], range[0] + 0.05, range[1] - 0.05, range[1]], [0.3, 1, 1, 0.3]);

  return (
    <motion.div
      style={{ opacity }}
      className={cn("min-h-[40vh] flex flex-col justify-center py-10", className)}
    >
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/20 text-orange-400 text-sm font-bold font-mono mb-4">
        {index + 1}
      </span>
      <h3 className="text-2xl font-display font-bold text-white mb-3">{item.title}</h3>
      <p className="text-zinc-400 leading-relaxed max-w-md">{item.description}</p>
    </motion.div>
  );
}
