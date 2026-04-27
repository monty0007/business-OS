import { cn } from "../../lib/utils";

interface BackgroundBeamsProps {
  className?: string;
}

export function BackgroundBeams({ className }: BackgroundBeamsProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="absolute inset-0">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-[1px] w-[40%] opacity-20"
            style={{
              background: `linear-gradient(90deg, transparent, #ea580c, transparent)`,
              top: `${15 + i * 15}%`,
              left: `${-20 + i * 10}%`,
              transform: `rotate(${-15 + i * 6}deg)`,
              animation: `beam-move-${i} ${8 + i * 2}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>
      <style>{`
        ${Array.from({ length: 6 })
          .map(
            (_, i) => `
          @keyframes beam-move-${i} {
            0%, 100% { transform: rotate(${-15 + i * 6}deg) translateX(0); opacity: 0.1; }
            50% { transform: rotate(${-15 + i * 6}deg) translateX(20%); opacity: 0.3; }
          }
        `
          )
          .join("\n")}
      `}</style>
    </div>
  );
}
