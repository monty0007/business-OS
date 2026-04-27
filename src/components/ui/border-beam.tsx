import { cn } from "../../lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
}

export function BorderBeam({
  className,
  size = 200,
  duration = 12,
  delay = 0,
  colorFrom = "#ea580c",
  colorTo = "#fb923c",
}: BorderBeamProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 rounded-[inherit]", className)}
      style={
        {
          "--size": size,
          "--duration": `${duration}s`,
          "--delay": `${delay}s`,
          "--color-from": colorFrom,
          "--color-to": colorTo,
        } as React.CSSProperties
      }
    >
      <div
        className="absolute inset-[0] rounded-[inherit] [border:1px_solid_transparent]"
        style={{
          maskClip: "padding-box, border-box",
          maskComposite: "intersect",
          mask: "linear-gradient(transparent, transparent), linear-gradient(#fff, #fff)",
          WebkitMask: "linear-gradient(transparent, transparent), linear-gradient(#fff, #fff)",
          WebkitMaskClip: "padding-box, border-box",
          WebkitMaskComposite: "source-in, xor",
          backgroundImage: `conic-gradient(from calc(var(--start, 0) * 1turn), ${colorFrom}, ${colorTo}, transparent 30%)`,
          animation: `border-beam ${duration}s linear ${delay}s infinite`,
        }}
      />
    </div>
  );
}
