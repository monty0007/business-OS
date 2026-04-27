import { cn } from "../../lib/utils";

interface RetroGridProps {
  className?: string;
  angle?: number;
}

export function RetroGrid({ className, angle = 65 }: RetroGridProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden opacity-[0.08]", className)}
      style={{ perspective: "200px" }}
    >
      <div
        className="absolute inset-0"
        style={{
          transform: `rotateX(${angle}deg)`,
          backgroundImage: `
            linear-gradient(to right, rgba(234,88,12,0.4) 1px, transparent 0),
            linear-gradient(to bottom, rgba(234,88,12,0.4) 1px, transparent 0)
          `,
          backgroundSize: "60px 60px",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
}
