import { cn } from "../../lib/utils";

interface AnimatedBeamProps {
  className?: string;
}

export function AnimatedBeam({ className }: AnimatedBeamProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0", className)}>
      <svg className="h-full w-full" viewBox="0 0 100 400" fill="none" preserveAspectRatio="none">
        <defs>
          <linearGradient id="beam-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ea580c" stopOpacity="0" />
            <stop offset="50%" stopColor="#ea580c" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M50 0 L50 400"
          stroke="url(#beam-grad)"
          strokeWidth="1"
          className="[stroke-dasharray:8_8]"
        >
          <animate attributeName="stroke-dashoffset" values="16;0" dur="1s" repeatCount="indefinite" />
        </path>
      </svg>
    </div>
  );
}
