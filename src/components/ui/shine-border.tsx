import { cn } from "../../lib/utils";

interface ShineBorderProps {
  children: React.ReactNode;
  className?: string;
  borderColor?: string;
  duration?: number;
}

export function ShineBorder({
  children,
  className,
  borderColor = "#ea580c",
  duration = 8,
}: ShineBorderProps) {
  return (
    <div
      className={cn("relative overflow-hidden rounded-2xl p-[1px]", className)}
      style={{ "--duration": `${duration}s` } as React.CSSProperties}
    >
      <div
        className="absolute inset-0 animate-border-beam rounded-2xl"
        style={{
          background: `conic-gradient(from 0deg, transparent 70%, ${borderColor} 85%, transparent 100%)`,
        }}
      />
      <div className="relative z-10 rounded-2xl bg-surface">{children}</div>
    </div>
  );
}
