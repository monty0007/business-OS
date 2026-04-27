import { cn } from "../../lib/utils";

interface RippleProps {
  className?: string;
  mainCircleSize?: number;
  numCircles?: number;
}

export function Ripple({
  className,
  mainCircleSize = 210,
  numCircles = 8,
}: RippleProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden", className)}>
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 70;
        const opacity = 1 - i * 0.1;
        const animDelay = `${i * 0.06}s`;
        return (
          <div
            key={i}
            className="absolute animate-ripple rounded-full border border-orange-500/20"
            style={{
              width: size,
              height: size,
              opacity,
              animationDelay: animDelay,
              "--i": i,
            } as React.CSSProperties}
          />
        );
      })}
    </div>
  );
}
